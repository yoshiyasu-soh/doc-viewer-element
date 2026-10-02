import type { DocFile } from "./types";
import { kindOf, LIMITS, unzipDocs, type UnzipWarning } from "./unzip";

export type ViewerInput = {
  files?: DocFile[] | null;
  zip?: Blob | ArrayBuffer | Uint8Array | null;
  fetcher?: (() => Promise<DocFile[] | Blob | ArrayBuffer | Uint8Array>) | null;
  src?: string | null;
};
export type LoadResult = { files: DocFile[]; warnings: UnzipWarning[] };

export function isZipBytes(b: Uint8Array): boolean {
  return b.length >= 4 && b[0] === 0x50 && b[1] === 0x4b && (b[2] === 3 || b[2] === 5 || b[2] === 7);
}

async function toBytes(data: Blob | ArrayBuffer | Uint8Array): Promise<Uint8Array> {
  if (data instanceof Uint8Array) return data;
  if (data instanceof ArrayBuffer) return new Uint8Array(data);
  return new Uint8Array(await data.arrayBuffer());
}

function nameFromUrl(src: string): string {
  try {
    const last = new URL(src, "http://localhost/").pathname.split("/").pop() ?? "";
    const name = decodeURIComponent(last);
    return /\.[A-Za-z0-9]+$/.test(name) ? name : "document.md";
  } catch {
    return "document.md";
  }
}

async function fromSrc(src: string, fetchImpl: typeof fetch): Promise<LoadResult> {
  const res = await fetchImpl(src);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const bytes = new Uint8Array(await res.arrayBuffer());
  const type = res.headers.get("content-type") ?? "";
  const name = nameFromUrl(src);
  if (/\.zip$/i.test(name) || /zip/i.test(type) || isZipBytes(bytes)) return unzipDocs(bytes);
  const text = new TextDecoder("utf-8").decode(bytes).slice(0, LIMITS.maxFileBytes);
  return { files: [{ path: name, kind: kindOf(name), source: text }], warnings: [] };
}

/** 優先順 files > zip > fetcher > src で入力を DocFile[] に解決する */
export async function loadInput(input: ViewerInput, fetchImpl: typeof fetch = fetch): Promise<LoadResult> {
  if (input.files) return { files: input.files, warnings: [] };
  if (input.zip) return unzipDocs(await toBytes(input.zip));
  if (input.fetcher) {
    const out = await input.fetcher();
    return Array.isArray(out) ? { files: out, warnings: [] } : unzipDocs(await toBytes(out));
  }
  if (input.src) return fromSrc(input.src, fetchImpl);
  return { files: [], warnings: [] };
}
