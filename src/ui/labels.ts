import { createContext } from "preact";
import { useContext } from "preact/hooks";

/** UI の全文言。`{n}` などのプレースホルダは format() で置換する */
export const defaultLabels = {
  tablist: "View mode",
  tabCode: "Code",
  tabPreview: "Preview",
  tabSlides: "Slides",
  search: "Search",
  searchAria: "Search in document",
  searchPlaceholder: "Search...",
  closeSearch: "Close search",
  searchResults: "Search results",
  matches: "{n} matches",
  moreResults: "{n} more",
  noMatch: "No matches",
  copy: "Copy",
  copied: "Copied",
  copyDone: "Copied to clipboard",
  copyFailed: "Copy failed. Select the source text and copy it manually.",
  browseFiles: "Browse files",
  closeFileList: "Close file list",
  fileCount: "{n} files",
  filterFiles: "Filter files",
  filterPlaceholder: "Filter files...",
  sourceView: "Source",
  showFullDocument: "Show full document",
  onThisPage: "On this page",
  cover: "Cover",
  prev: "Prev",
  next: "Next",
  fullscreen: "Fullscreen",
  exit: "Exit",
  slide: "Slide {n}: {title}",
  slideGroup: "Select slide",
  slideTokens: "{current} / {total} tokens",
  totalTokens: "{n} tokens",
  slideTokensTitle: "Current slide / total (estimated tokens)",
  hintMove: "move",
  hintFullscreen: "fullscreen",
  hintExit: "exit",
  license: "License",
  total: "Total",
  loading: "Loading…",
  empty: "No documents to show.",
  error: "Failed to load the document.",
} as const;

export type LabelKey = keyof typeof defaultLabels;
export type Labels = Record<LabelKey, string>;

export function mergeLabels(partial?: Partial<Labels> | null): Labels {
  return { ...defaultLabels, ...(partial ?? {}) };
}

export function format(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
}

export const LabelsContext = createContext<Labels>(defaultLabels);
export const useLabels = () => useContext(LabelsContext);
