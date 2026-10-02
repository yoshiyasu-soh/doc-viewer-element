import type { RefObject } from "preact";
import { useEffect } from "preact/hooks";
import { findRanges } from "../lib/search";

type HighlightApi = { highlights?: Map<string, unknown> };

export const HIGHLIGHT_NAME = "doc-viewer-search";

/**
 * コンテナ内のテキストノードから検索語に一致する範囲を CSS Custom Highlight API で強調する。
 * DOM 自体は書き換えない(描画ライブラリが管理する DOM と衝突しない)。非対応ブラウザでは何もしない。
 * deps が変わる(本文の切替)たびに再計算する。
 */
export function useDomHighlight(ref: RefObject<HTMLElement>, query: string, deps: unknown[]) {
  useEffect(() => {
    const registry = (CSS as unknown as HighlightApi).highlights;
    const HighlightCtor = (window as unknown as { Highlight?: new (...r: Range[]) => unknown }).Highlight;
    if (!registry || !HighlightCtor) return;

    registry.delete(HIGHLIGHT_NAME);
    const root = ref.current;
    if (!root || !query.trim()) return;

    const ranges: Range[] = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      const text = node.nodeValue ?? "";
      for (const [start, end] of findRanges(text, query)) {
        const range = new Range();
        range.setStart(node, start);
        range.setEnd(node, end);
        ranges.push(range);
      }
    }
    if (ranges.length > 0) registry.set(HIGHLIGHT_NAME, new HighlightCtor(...ranges));
    return () => {
      registry.delete(HIGHLIGHT_NAME);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, ...deps]);
}
