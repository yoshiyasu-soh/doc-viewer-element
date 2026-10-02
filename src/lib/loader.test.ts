import { strToU8, zipSync } from "fflate";
import { describe, expect, it } from "vitest";
import { isZipBytes, loadInput } from "./loader";

const zipBytes = () => zipSync({ "SKILL.md": strToU8("# T"), "n.txt": strToU8("n") });
const res = (body: BodyInit, init: ResponseInit = {}) => Promise.resolve(new Response(body, { status: 200, ...init }));
const fakeFetch = (fn: () => Promise<Response>) => fn as unknown as typeof fetch;

describe("isZipBytes", () => {
  it("PK ヘッダを ZIP と判定する", () => {
    expect(isZipBytes(zipBytes())).toBe(true);
    expect(isZipBytes(strToU8("# md"))).toBe(false);
    expect(isZipBytes(new Uint8Array([]))).toBe(false);
  });
});

describe("loadInput", () => {
  it("入力が無ければ空", async () => {
    expect(await loadInput({})).toEqual({ files: [], warnings: [] });
  });

  it("files を優先する(zip・src があっても使わない)", async () => {
    const files = [{ path: "a.md", kind: "markdown" as const, source: "a" }];
    const f = fakeFetch(() => {
      throw new Error("呼ばれない");
    });
    expect((await loadInput({ files, zip: zipBytes(), src: "/x.md" }, f)).files).toEqual(files);
  });

  it("zip(Blob / ArrayBuffer / Uint8Array)を展開する", async () => {
    const z = zipBytes();
    for (const zip of [new Blob([z]), z.buffer.slice(z.byteOffset, z.byteOffset + z.byteLength), z]) {
      expect((await loadInput({ zip })).files.map((f) => f.path)).toEqual(["SKILL.md", "n.txt"]);
    }
  });

  it("fetcher がファイル配列を返す場合はそのまま、Blob を返す場合は ZIP として展開する", async () => {
    const files = [{ path: "a.md", kind: "markdown" as const, source: "a" }];
    expect((await loadInput({ fetcher: async () => files })).files).toEqual(files);
    expect((await loadInput({ fetcher: async () => new Blob([zipBytes()]) })).files).toHaveLength(2);
  });

  it("src: Markdown はファイル名を URL から決め、1ファイルにする", async () => {
    const f = fakeFetch(() => res("# hi"));
    expect((await loadInput({ src: "https://x.test/docs/My%20Doc.md?v=1" }, f)).files).toEqual([
      { path: "My Doc.md", kind: "markdown", source: "# hi" },
    ]);
  });

  it("src: 拡張子が無い URL は document.md として扱う", async () => {
    const f = fakeFetch(() => res("body"));
    expect((await loadInput({ src: "https://x.test/raw" }, f)).files[0].path).toBe("document.md");
  });

  it("src: .zip・Content-Type・PK ヘッダのいずれでも ZIP と判定する", async () => {
    const z = zipBytes();
    const plain = fakeFetch(() => res(z));
    const typed = fakeFetch(() => res(z, { headers: { "content-type": "application/zip" } }));
    expect((await loadInput({ src: "/a.zip" }, plain)).files).toHaveLength(2);
    expect((await loadInput({ src: "/download?id=1" }, typed)).files).toHaveLength(2);
    expect((await loadInput({ src: "/download?id=1" }, plain)).files).toHaveLength(2);
  });

  it("src: HTTP エラーは Error を投げる", async () => {
    const f = fakeFetch(() => res("nf", { status: 404 }));
    await expect(loadInput({ src: "/missing.md" }, f)).rejects.toThrow(/404/);
  });

  it("src: 壊れた ZIP は Error を投げる", async () => {
    const f = fakeFetch(() => res(new Uint8Array([0x50, 0x4b, 3, 4, 9, 9, 9])));
    await expect(loadInput({ src: "/bad.zip" }, f)).rejects.toThrow();
  });

  it("src: 1ファイルの上限を超える本文は切り詰める", async () => {
    const f = fakeFetch(() => res("a".repeat(600 * 1024)));
    expect((await loadInput({ src: "/big.md" }, f)).files[0].source.length).toBe(512 * 1024);
  });
});
