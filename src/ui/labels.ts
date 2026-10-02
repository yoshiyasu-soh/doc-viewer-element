import { createContext } from "preact";
import { useContext } from "preact/hooks";

export const defaultLabels = {
  tabCode: "Code",
  tabPreview: "Preview",
  tabSlides: "Slides",
  search: "Search",
  searchPlaceholder: "Search in this file",
  copy: "Copy",
  copied: "Copied",
  copyFailed: "Copy failed. Select the text and copy it manually.",
  browseFiles: "Browse files",
  folder: "Folder",
  filterFiles: "Filter files",
  noMatch: "No matches",
  showFullDocument: "Show full document",
  onThisPage: "On this page",
  loading: "Loading…",
  empty: "No documents to show.",
  error: "Failed to load the document.",
} as const;

export type LabelKey = keyof typeof defaultLabels;
export type Labels = Record<LabelKey, string>;

export function mergeLabels(partial?: Partial<Labels> | null): Labels {
  return { ...defaultLabels, ...(partial ?? {}) };
}

export const LabelsContext = createContext<Labels>(defaultLabels);
export const useLabels = () => useContext(LabelsContext);
