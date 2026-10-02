import { useEffect, useRef, useState } from "preact/hooks";
import type { ParsedDoc } from "../lib/types";
import { format, useLabels } from "./labels";
import MarkdownContent from "./MarkdownContent";
import { useDomHighlight } from "./useDomHighlight";

interface Props {
  doc: ParsedDoc;
  index: number;
  onIndexChange: (index: number) => void;
  query: string;
  /** 検索パレットが開いている間はキー操作を奪わない */
  keysEnabled: boolean;
  onShowFull: () => void;
}

function isTypingTarget(el: EventTarget | null | undefined): boolean {
  if (!(el instanceof HTMLElement)) return false;
  return el.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName);
}

export default function SlidesPane({ doc, index, onIndexChange, query, keysEnabled, onShowFull }: Props) {
  const labels = useLabels();
  const stageRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [fullscreen, setFullscreen] = useState(false);

  const total = doc.sections.length + 1;
  const last = total - 1;
  const titles = [labels.cover, ...doc.sections.map((s) => s.title)];
  const section = index > 0 ? doc.sections[index - 1] : null;
  const tokens = section ? section.tokenCount : doc.coverTokenCount;
  const slideLabel = (i: number) => format(labels.slide, { n: i + 1, title: titles[i] });

  useDomHighlight(bodyRef, query, [doc, index]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 0 });
  }, [doc, index]);

  // タブ操作で Slides を開いた直後は、← → がタブ移動ではなくスライド送りになるようフォーカスをスライド領域へ移す
  useEffect(() => {
    const root = stageRef.current?.getRootNode() as Document | ShadowRoot | undefined;
    if (root?.activeElement?.getAttribute("role") === "tab") bodyRef.current?.focus({ preventScroll: true });
  }, []);

  // Shadow DOM 内の要素を全画面にすると、document.fullscreenElement はホスト要素を返すため、自身のルートで判定する
  useEffect(() => {
    const onChange = () => {
      const root = stageRef.current?.getRootNode() as Document | ShadowRoot | undefined;
      setFullscreen(root?.fullscreenElement === stageRef.current);
    };
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  function toggleFullscreen() {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void stageRef.current?.requestFullscreen?.();
  }

  // Slides タブが表示されている間だけ有効(アンマウントで解除される)。
  // 他のインスタンスやページ全体のキーを奪わないよう、自身のホスト要素で受ける
  useEffect(() => {
    if (!keysEnabled) return;
    const root = stageRef.current?.getRootNode();
    const target: EventTarget = root instanceof ShadowRoot ? root.host : window;
    function onKeyDown(ev: Event) {
      const e = ev as KeyboardEvent;
      if (e.ctrlKey || e.metaKey || e.altKey || isTypingTarget(e.composedPath()[0])) return;
      let next: number | null = null;
      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
          next = Math.min(last, index + 1);
          break;
        case "ArrowLeft":
        case "PageUp":
          next = Math.max(0, index - 1);
          break;
        case "Home":
          next = 0;
          break;
        case "End":
          next = last;
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          return;
        default:
          return;
      }
      e.preventDefault();
      if (next !== index) onIndexChange(next);
    }
    target.addEventListener("keydown", onKeyDown);
    return () => target.removeEventListener("keydown", onKeyDown);
  }, [keysEnabled, index, last, onIndexChange]);

  const navBtn =
    "rounded-md border border-border px-3 py-1.5 text-xs font-medium text-ink-secondary hover:bg-surface-2 hover:text-ink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent";

  return (
    <div ref={stageRef} className={`flex flex-col bg-surface ${fullscreen ? "h-screen" : ""}`}>
      <div
        ref={bodyRef}
        tabIndex={0}
        aria-label={slideLabel(index)}
        className={`overflow-y-auto p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal-ring ${
          fullscreen ? "flex-1 px-[8vw] py-10" : "h-[420px]"
        }`}
      >
        {section ? (
          <>
            <h3 className="mb-4 font-display text-xl font-semibold text-ink">{section.title}</h3>
            <MarkdownContent content={section.body} />
          </>
        ) : (
          <div className="flex h-full flex-col justify-center gap-3">
            <p className="font-mono text-xs uppercase tracking-wide text-ink-muted">{doc.file.path}</p>
            <h3 className="font-display text-2xl font-bold text-ink">{doc.frontmatter.name || doc.file.path}</h3>
            {doc.frontmatter.description && <p className="max-w-prose text-sm leading-relaxed text-ink-secondary">{doc.frontmatter.description}</p>}
            <dl className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-xs text-ink-secondary">
              {doc.frontmatter.license && (
                <div className="flex gap-1.5">
                  <dt>{labels.license}</dt>
                  <dd className="font-mono text-ink">{doc.frontmatter.license}</dd>
                </div>
              )}
              <div className="flex gap-1.5">
                <dt>{labels.total}</dt>
                <dd className="font-mono text-ink">{format(labels.totalTokens, { n: doc.totalTokenCount.toLocaleString() })}</dd>
              </div>
            </dl>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border px-3 py-2">
        <button type="button" className={navBtn} disabled={index === 0} onClick={() => onIndexChange(index - 1)}>
          {labels.prev}
        </button>
        <span className="rounded-full bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-ink-secondary" title={labels.slideTokensTitle}>
          {format(labels.slideTokens, { current: tokens.toLocaleString(), total: doc.totalTokenCount.toLocaleString() })}
        </span>
        <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5" role="group" aria-label={labels.slideGroup}>
          {titles.map((_, i) => (
            <button
              key={i}
              type="button"
              title={slideLabel(i)}
              aria-label={slideLabel(i)}
              aria-current={i === index ? "true" : undefined}
              onClick={() => onIndexChange(i)}
              className={`h-2 rounded-full ${i === index ? "w-6 bg-ink" : "w-2 bg-border hover:bg-ink-muted"}`}
            />
          ))}
        </div>
        <span className="font-mono text-xs tabular-nums text-ink-secondary" aria-live="polite">
          {index + 1} / {total}
        </span>
        <button type="button" className={navBtn} disabled={index === last} onClick={() => onIndexChange(index + 1)}>
          {labels.next}
        </button>
        <button type="button" className={navBtn} onClick={toggleFullscreen} aria-pressed={fullscreen}>
          {fullscreen ? labels.exit : labels.fullscreen}
        </button>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-border bg-surface-2 px-3 py-1.5 text-[11px] text-ink-muted">
        <span>
          <kbd className="font-mono">←</kbd> <kbd className="font-mono">→</kbd> {labels.hintMove} · <kbd className="font-mono">Home</kbd> /{" "}
          <kbd className="font-mono">End</kbd> · <kbd className="font-mono">F</kbd> {labels.hintFullscreen} · <kbd className="font-mono">Esc</kbd>{" "}
          {labels.hintExit}
        </span>
        <button type="button" onClick={onShowFull} className="font-medium text-ink-secondary underline underline-offset-2 hover:text-ink">
          {labels.showFullDocument}
        </button>
      </div>
    </div>
  );
}
