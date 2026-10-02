import { strFromU8, unzipSync } from "fflate";
import type { DocFile } from "./types";

export const LIMITS = { maxFileBytes: 512 * 1024, maxTotalBytes: 2 * 1024 * 1024, maxFiles: 100 } as const;

export type UnzipWarning = {
  reason: "too-large" | "unsafe-path" | "binary" | "junk" | "limit";
  path: string;
};
export type UnzipResult = { files: DocFile[]; warnings: UnzipWarning[] };

export function kindOf(path: string): "markdown" | "text" {
  return /\.(md|markdown)$/i.test(path) ? "markdown" : "text";
}

function isSafePath(path: string): boolean {
  if (!path || path.startsWith("/") || path.includes("\\") || path.includes("\0")) return false;
  return path.split("/").every((s) => s !== "" && s !== ".." && s !== ".");
}

function isJunk(path: string): boolean {
  return path.startsWith("__MACOSX/") || (path.split("/").pop() ?? "").startsWith("._");
}

/** SKILL.md、次に README.md(いずれも最も浅い階層)を先頭に、残りはパス順に並べる */
function sortFiles(files: DocFile[]): DocFile[] {
  const rank = (f: DocFile) => {
    const name = f.path.toLowerCase().split("/").pop();
    const depth = f.path.split("/").length;
    if (name === "skill.md") return depth;
    if (name === "readme.md") return 100 + depth;
    return 1000;
  };
  return [...files].sort((a, b) => rank(a) - rank(b) || a.path.localeCompare(b.path));
}

/** ZIP からテキストとして表示できるファイルだけを取り出す。不正な ZIP は Error を投げる */
export function unzipDocs(bytes: Uint8Array): UnzipResult {
  const warnings: UnzipWarning[] = [];

  // filter は展開前に呼ばれる。ここで弾いたエントリは inflate されない(宣言サイズの検査)
  const entries = unzipSync(bytes, {
    filter: (f) => {
      if (f.name.endsWith("/")) return false;
      if (isJunk(f.name)) {
        warnings.push({ reason: "junk", path: f.name });
        return false;
      }
      if (!isSafePath(f.name)) {
        warnings.push({ reason: "unsafe-path", path: f.name });
        return false;
      }
      if (f.originalSize > LIMITS.maxFileBytes) {
        warnings.push({ reason: "too-large", path: f.name });
        return false;
      }
      return true;
    },
  });

  const files: DocFile[] = [];
  let total = 0;
  for (const [path, data] of Object.entries(entries)) {
    // 宣言サイズを偽った ZIP への備え。実サイズでも検査する
    if (data.byteLength > LIMITS.maxFileBytes) {
      warnings.push({ reason: "too-large", path });
      continue;
    }
    if (data.includes(0)) {
      warnings.push({ reason: "binary", path });
      continue;
    }
    total += data.byteLength;
    if (files.length >= LIMITS.maxFiles || total > LIMITS.maxTotalBytes) {
      warnings.push({ reason: "limit", path });
      break;
    }
    files.push({ path, kind: kindOf(path), source: strFromU8(data) });
  }
  return { files: sortFiles(files), warnings };
}
