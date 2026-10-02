import { strToU8, zipSync } from "fflate";
import { describe, expect, it } from "vitest";
import { LIMITS, unzipDocs } from "./unzip";

const zip = (entries: Record<string, string | Uint8Array>) =>
  zipSync(Object.fromEntries(Object.entries(entries).map(([k, v]) => [k, typeof v === "string" ? strToU8(v) : v])));

describe("unzipDocs", () => {
  it("テキストファイルを展開し、拡張子から種別を決める", () => {
    const { files } = unzipDocs(zip({ "a.md": "# A", "b.txt": "text" }));
    expect(files).toEqual([
      { path: "a.md", kind: "markdown", source: "# A" },
      { path: "b.txt", kind: "text", source: "text" },
    ]);
  });

  it("SKILL.md(最も浅い階層)を先頭にし、残りはパス順に並べる", () => {
    const { files } = unzipDocs(zip({ "z.md": "z", "x/SKILL.md": "deep", "SKILL.md": "top", "a.md": "a" }));
    expect(files.map((f) => f.path)).toEqual(["SKILL.md", "x/SKILL.md", "a.md", "z.md"]);
  });

  it("SKILL.md が無ければ、最も浅い README.md を先頭にする", () => {
    const { files } = unzipDocs(zip({ "b.md": "b", "docs/README.md": "deep", "README.md": "top", "a.md": "a" }));
    expect(files.map((f) => f.path)).toEqual(["README.md", "docs/README.md", "a.md", "b.md"]);
  });

  it("SKILL.md と README.md が両方ある場合は SKILL.md が先頭", () => {
    const { files } = unzipDocs(zip({ "README.md": "r", "SKILL.md": "s" }));
    expect(files.map((f) => f.path)).toEqual(["SKILL.md", "README.md"]);
  });

  it("__MACOSX・._ ファイルを除外して warnings に junk を記録する", () => {
    const { files, warnings } = unzipDocs(zip({ "a.md": "a", "__MACOSX/a.md": "x", "d/._a.md": "x" }));
    expect(files.map((f) => f.path)).toEqual(["a.md"]);
    expect(warnings.map((w) => w.reason)).toEqual(["junk", "junk"]);
  });

  it("NUL を含むバイナリを除外する", () => {
    const { files, warnings } = unzipDocs(zip({ "a.md": "a", "b.bin": new Uint8Array([1, 0, 2]) }));
    expect(files.map((f) => f.path)).toEqual(["a.md"]);
    expect(warnings).toEqual([{ reason: "binary", path: "b.bin" }]);
  });

  it("不正なパス(.. ・絶対パス・バックスラッシュ)を除外する", () => {
    const { files, warnings } = unzipDocs(zip({ "ok.md": "ok", "../evil.md": "x", "/abs.md": "x", "a\\b.md": "x" }));
    expect(files.map((f) => f.path)).toEqual(["ok.md"]);
    expect(warnings.map((w) => w.reason).sort()).toEqual(["unsafe-path", "unsafe-path", "unsafe-path"]);
  });

  it("宣言サイズが上限を超えるファイルは展開せず too-large にする", () => {
    const big = "a".repeat(LIMITS.maxFileBytes + 1);
    const { files, warnings } = unzipDocs(zip({ "ok.md": "ok", "big.md": big }));
    expect(files.map((f) => f.path)).toEqual(["ok.md"]);
    expect(warnings).toEqual([{ reason: "too-large", path: "big.md" }]);
  });

  it("101 ファイルのとき 100 件で止め、limit を記録する", () => {
    const entries: Record<string, string> = {};
    for (let i = 0; i < 101; i++) entries[`f${String(i).padStart(3, "0")}.md`] = "x";
    const { files, warnings } = unzipDocs(zip(entries));
    expect(files).toHaveLength(LIMITS.maxFiles);
    expect(warnings.some((w) => w.reason === "limit")).toBe(true);
  });

  it("合計サイズが上限を超えたら、そこで止めて limit を記録する", () => {
    const entries: Record<string, string> = {};
    for (let i = 0; i < 5; i++) entries[`f${i}.md`] = String(i).repeat(500 * 1024);
    const { files, warnings } = unzipDocs(zip(entries));
    expect(files).toHaveLength(4); // 4 * 500KB = 2,000KB <= 2MB(2,048KB)、5 つ目で超過
    expect(warnings.some((w) => w.reason === "limit")).toBe(true);
  });

  it("壊れたデータ・ZIP でないデータは Error を投げる", () => {
    expect(() => unzipDocs(new Uint8Array([1, 2, 3, 4]))).toThrow();
    expect(() => unzipDocs(strToU8("# これは zip ではない"))).toThrow();
  });

  it("空の ZIP は files が空で、例外にならない", () => {
    expect(unzipDocs(zip({})).files).toEqual([]);
  });

  it("宣言サイズを偽った ZIP は巨大ファイルを結果に含めない(例外か除外)", () => {
    const big = "a".repeat(LIMITS.maxFileBytes * 4);
    const bytes = zip({ "ok.md": "ok", "big.md": big });
    const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    // ローカルヘッダ(0x04034b50)とセントラルディレクトリ(0x02014b50)の非圧縮サイズを 10 に書き換える
    for (let i = 0; i + 4 < bytes.length; i++) {
      const sig = dv.getUint32(i, true);
      if (sig === 0x04034b50 && dv.getUint32(i + 22, true) === big.length) dv.setUint32(i + 22, 10, true);
      if (sig === 0x02014b50 && dv.getUint32(i + 24, true) === big.length) dv.setUint32(i + 24, 10, true);
    }
    let files: { path: string; source: string }[] = [];
    try {
      files = unzipDocs(bytes).files;
    } catch {
      return; // 展開時に不整合として拒否されるのも許容
    }
    expect(files.every((f) => f.source.length <= LIMITS.maxFileBytes)).toBe(true);
  });
});
