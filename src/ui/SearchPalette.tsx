import type { JSX } from "preact";
import { useEffect, useId, useMemo, useRef, useState } from "preact/hooks";
import { searchDoc } from "../lib/search";
import type { ParsedDoc, SearchHit } from "../lib/types";
import Highlight from "./Highlight";
import { CloseIcon, SearchIcon } from "./icons";
import { format, useLabels } from "./labels";

const MAX_RESULTS = 50;

interface Props {
  doc: ParsedDoc;
  initialQuery: string;
  onQueryChange: (q: string) => void;
  onSelect: (hit: SearchHit) => void;
  onClose: () => void;
}

export default function SearchPalette({ doc, initialQuery, onQueryChange, onSelect, onClose }: Props) {
  const labels = useLabels();
  const [input, setInput] = useState(initialQuery);
  const [query, setQuery] = useState(initialQuery);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();

  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
  }, []);

  // 入力のデバウンス(120ms)
  useEffect(() => {
    const t = window.setTimeout(() => {
      setQuery(input);
      onQueryChange(input);
      setActive(0);
    }, 120);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  // 外側クリックで閉じる。Shadow DOM 内のクリックは document 側では対象がホストに丸められるため composedPath で判定する
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (rootRef.current && !e.composedPath().includes(rootRef.current)) onClose();
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [onClose]);

  const hits = useMemo(() => searchDoc(doc, query), [doc, query]);
  const shown = hits.slice(0, MAX_RESULTS);
  const hasQuery = query.trim() !== "";

  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`#${CSS.escape(`${listId}-${active}`)}`)?.scrollIntoView({ block: "nearest" });
  }, [active, listId]);

  function onKeyDown(e: JSX.TargetedKeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown" && shown.length > 0) {
      e.preventDefault();
      setActive((a) => (a + 1) % shown.length);
    } else if (e.key === "ArrowUp" && shown.length > 0) {
      e.preventDefault();
      setActive((a) => (a - 1 + shown.length) % shown.length);
    } else if (e.key === "Enter" && shown[active]) {
      e.preventDefault();
      onSelect(shown[active]);
    }
  }

  const titleOf = (id: string) => doc.sections.find((s) => s.id === id)?.title ?? doc.file.path;

  return (
    <div ref={rootRef} className="absolute inset-x-3 top-12 z-20 border border-border bg-surface shadow-card sm:left-auto sm:w-[28rem]">
      <div className="flex items-center gap-2 border-b border-border px-3">
        <SearchIcon className="h-4 w-4 shrink-0 text-ink-muted" />
        <input
          ref={inputRef}
          role="combobox"
          aria-expanded={shown.length > 0}
          aria-controls={listId}
          aria-activedescendant={shown.length > 0 ? `${listId}-${active}` : undefined}
          aria-label={labels.searchAria}
          aria-autocomplete="list"
          value={input}
          onInput={(e) => setInput(e.currentTarget.value)}
          onKeyDown={onKeyDown}
          placeholder={labels.searchPlaceholder}
          className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-ink placeholder:text-ink-muted focus:outline-none"
        />
        {hasQuery && (
          <span className="shrink-0 font-mono text-[11px] text-ink-secondary" aria-live="polite">
            {hits.length === 0 ? labels.noMatch : format(labels.matches, { n: hits.length })}
          </span>
        )}
        <button type="button" onClick={onClose} aria-label={labels.closeSearch} className="rounded p-1 text-ink-secondary hover:bg-surface-2 hover:text-ink">
          <CloseIcon className="h-4 w-4" />
        </button>
      </div>
      <ul ref={listRef} id={listId} role="listbox" aria-label={labels.searchResults} className="max-h-72 overflow-y-auto">
        {shown.map((hit, i) => (
          <li
            key={`${hit.kind}-${hit.line}-${i}`}
            id={`${listId}-${i}`}
            role="option"
            aria-selected={i === active}
            onMouseEnter={() => setActive(i)}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onSelect(hit)}
            className={`cursor-pointer border-l-2 px-3 py-2 ${i === active ? "border-ink bg-surface-2" : "border-transparent"}`}
          >
            {hit.kind === "heading" ? (
              <p className="truncate text-sm font-semibold text-ink">
                <Highlight text={hit.snippet} ranges={hit.ranges} />
              </p>
            ) : (
              <>
                <p className="truncate text-[11px] font-semibold uppercase tracking-wide text-ink-muted">{titleOf(hit.sectionId)}</p>
                <p className="truncate text-xs text-ink-secondary">
                  <Highlight text={hit.snippet} ranges={hit.ranges} />
                </p>
              </>
            )}
          </li>
        ))}
        {hits.length > MAX_RESULTS && (
          <li className="px-3 py-2 text-xs text-ink-muted">{format(labels.moreResults, { n: hits.length - MAX_RESULTS })}</li>
        )}
      </ul>
    </div>
  );
}
