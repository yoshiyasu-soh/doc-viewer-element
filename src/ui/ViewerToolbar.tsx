import type { ComponentChildren, JSX } from "preact";
import { useRef } from "preact/hooks";
import { SearchIcon } from "./icons";
import { useLabels } from "./labels";

export type ViewerTab = "code" | "preview" | "slides";

const TAB_IDS: ViewerTab[] = ["code", "preview", "slides"];

interface Props {
  /** インスタンス固有の ID 接頭辞(複数インスタンスでの ID 衝突を避ける) */
  uid: string;
  tab: ViewerTab;
  onTabChange: (tab: ViewerTab) => void;
  onOpenSearch: () => void;
  /** 右端(Copy ボタンなど) */
  actions: ComponentChildren;
}

export const tabId = (uid: string, tab: ViewerTab) => `${uid}-tab-${tab}`;

export default function ViewerToolbar({ uid, tab, onTabChange, onOpenSearch, actions }: Props) {
  const labels = useLabels();
  const tabRefs = useRef<Partial<Record<ViewerTab, HTMLButtonElement | null>>>({});
  const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);
  const tabLabels: Record<ViewerTab, string> = { code: labels.tabCode, preview: labels.tabPreview, slides: labels.tabSlides };

  // ARIA のタブパターン: ←/→ でタブ間を移動し、移動先のタブを選択状態にする
  function onKeyDown(e: JSX.TargetedKeyboardEvent<HTMLDivElement>) {
    const at = TAB_IDS.indexOf(tab);
    let next = -1;
    if (e.key === "ArrowRight") next = (at + 1) % TAB_IDS.length;
    else if (e.key === "ArrowLeft") next = (at - 1 + TAB_IDS.length) % TAB_IDS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TAB_IDS.length - 1;
    if (next === -1) return;
    e.preventDefault();
    e.stopPropagation(); // Slides のキー操作と干渉させない
    onTabChange(TAB_IDS[next]);
    requestAnimationFrame(() => tabRefs.current[TAB_IDS[next]]?.focus());
  }

  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-border px-2 py-1.5">
      <div role="tablist" aria-label={labels.tablist} className="flex" onKeyDown={onKeyDown}>
        {TAB_IDS.map((id) => (
          <button
            key={id}
            ref={(el) => {
              tabRefs.current[id] = el;
            }}
            id={tabId(uid, id)}
            role="tab"
            type="button"
            aria-selected={tab === id}
            aria-controls={`${uid}-panel`}
            tabIndex={tab === id ? 0 : -1}
            onClick={() => onTabChange(id)}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wide ${
              tab === id ? "border-b-2 border-ink text-ink" : "border-b-2 border-transparent text-ink-secondary hover:text-ink"
            }`}
          >
            {tabLabels[id]}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={onOpenSearch}
        className="inline-flex items-center gap-2 rounded-md border border-border px-2.5 py-1.5 text-xs text-ink-secondary hover:bg-surface-2 hover:text-ink"
      >
        <SearchIcon className="h-3.5 w-3.5" />
        {labels.search}
        <kbd className="hidden rounded-sm border border-border px-1 font-mono text-[10px] text-ink-muted sm:inline">{isMac ? "⌘F" : "Ctrl+F"}</kbd>
      </button>
      <div className="ml-auto flex items-center gap-2">{actions}</div>
    </div>
  );
}
