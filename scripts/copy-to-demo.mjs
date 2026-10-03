import { copyFileSync } from "node:fs";

// GitHub Pages で demo/ だけで動かせるよう、ビルド済みの単一 JS をデモに同梱する
copyFileSync("dist/doc-viewer.js", "demo/doc-viewer.js");
console.log("demo/doc-viewer.js を更新しました");
