import { h, render } from "preact";
import { loadInput, type ViewerInput } from "./lib/loader";
import type { DocFile } from "./lib/types";
import viewerCss from "./styles/viewer.css?inline";
import { App, type ViewerState } from "./ui/App";
import { mergeLabels, type Labels } from "./ui/labels";
import type { ViewerTab } from "./ui/ViewerToolbar";

export class DocViewerElement extends HTMLElement {
  static observedAttributes = ["src", "initial-tab"];

  #root: ShadowRoot;
  #mount: HTMLDivElement;
  #input: ViewerInput = {};
  #labels: Labels = mergeLabels();
  #state: ViewerState = { status: "loading" };
  #seq = 0;
  #queued = false;

  constructor() {
    super();
    this.#root = this.attachShadow({ mode: "open" });
    try {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(viewerCss);
      this.#root.adoptedStyleSheets = [sheet];
    } catch {
      const style = document.createElement("style");
      style.textContent = viewerCss;
      this.#root.append(style);
    }
    this.#mount = document.createElement("div");
    this.#root.append(this.#mount);

    // 要素の定義より先にプロパティが設定された場合(スクリプトの実行順)、インスタンス自身の値が
    // setter を隠してしまう。値を取り出して setter 経由で設定し直す
    for (const prop of ["files", "zip", "fetcher", "labels"] as const) {
      if (Object.prototype.hasOwnProperty.call(this, prop)) {
        const value = (this as Record<string, unknown>)[prop];
        delete (this as Record<string, unknown>)[prop];
        (this as Record<string, unknown>)[prop] = value;
      }
    }
  }

  get files() {
    return this.#input.files ?? null;
  }
  set files(v: DocFile[] | null) {
    this.#input.files = v;
    this.#reload();
  }
  get zip() {
    return this.#input.zip ?? null;
  }
  set zip(v: ViewerInput["zip"]) {
    this.#input.zip = v;
    this.#reload();
  }
  get fetcher() {
    return this.#input.fetcher ?? null;
  }
  set fetcher(v: ViewerInput["fetcher"]) {
    this.#input.fetcher = v;
    this.#reload();
  }
  get labels() {
    return this.#labels;
  }
  set labels(v: Partial<Labels> | null) {
    this.#labels = mergeLabels(v);
    this.#paint();
  }

  connectedCallback() {
    this.#reload();
  }

  // DOM から外れたら描画を破棄する(document に付けたリスナーを残さない)。再接続時は読み込み直す
  disconnectedCallback() {
    this.#seq++; // 進行中の読み込み結果を捨てる
    render(null, this.#mount);
  }

  attributeChangedCallback(name: string) {
    if (name === "src") this.#reload();
    else this.#paint();
  }

  #reload() {
    if (!this.isConnected || this.#queued) return;
    this.#queued = true;
    queueMicrotask(async () => {
      this.#queued = false;
      const seq = ++this.#seq;
      this.#state = { status: "loading" };
      this.#paint();
      try {
        const { files, warnings } = await loadInput({ ...this.#input, src: this.getAttribute("src") });
        if (seq !== this.#seq) return; // 古い読み込みの結果は捨てる
        this.#state = files.length ? { status: "ready", files } : { status: "empty" };
        this.#paint();
        if (warnings.length) this.#emit("doc-viewer-warning", { warnings });
        if (files.length) this.#emit("doc-viewer-ready", { count: files.length });
      } catch (e) {
        if (seq !== this.#seq) return;
        const message = e instanceof Error ? e.message : String(e);
        this.#state = { status: "error", message };
        this.#paint();
        this.#emit("doc-viewer-error", { message });
      }
    });
  }

  #emit(type: string, detail: unknown) {
    this.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
  }

  #paint() {
    const raw = this.getAttribute("initial-tab");
    const initialTab: ViewerTab = raw === "code" || raw === "slides" ? raw : "preview";
    render(h(App, { state: this.#state, labels: this.#labels, initialTab }), this.#mount);
  }
}
