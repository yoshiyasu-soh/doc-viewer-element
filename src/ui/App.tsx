import type { DocFile } from "../lib/types";
import DocViewer from "./DocViewer";
import { LabelsContext, useLabels, type Labels } from "./labels";
import type { ViewerTab } from "./ViewerToolbar";

export type ViewerState =
  | { status: "loading" }
  | { status: "empty" }
  | { status: "error"; message: string }
  | { status: "ready"; files: DocFile[] };

interface Props {
  state: ViewerState;
  labels: Labels;
  initialTab: ViewerTab;
}

function Notice({ role, text }: { role: "status" | "alert"; text: string }) {
  return (
    <div role={role} className="border border-border bg-surface px-4 py-6 text-center text-sm text-ink-secondary">
      {text}
    </div>
  );
}

function Body({ state, initialTab }: { state: ViewerState; initialTab: ViewerTab }) {
  const labels = useLabels();
  if (state.status === "loading") return <Notice role="status" text={labels.loading} />;
  if (state.status === "empty") return <Notice role="status" text={labels.empty} />;
  // 内部のエラー詳細は画面に出さず、doc-viewer-error イベントで受け取る
  if (state.status === "error") return <Notice role="alert" text={labels.error} />;
  return <DocViewer files={state.files} initialTab={initialTab} />;
}

export function App({ state, labels, initialTab }: Props) {
  return (
    <LabelsContext.Provider value={labels}>
      <Body state={state} initialTab={initialTab} />
    </LabelsContext.Provider>
  );
}
