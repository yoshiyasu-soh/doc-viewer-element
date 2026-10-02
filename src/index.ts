import { DocViewerElement } from "./element";

if (!customElements.get("doc-viewer")) customElements.define("doc-viewer", DocViewerElement);
export { DocViewerElement };
