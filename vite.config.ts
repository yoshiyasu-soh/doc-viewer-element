import { defineConfig } from "vitest/config";

export default defineConfig({
  oxc: { jsx: { runtime: "automatic", importSource: "preact" } },
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
    },
  },
  build: {
    lib: { entry: "src/index.ts", formats: ["es"], fileName: () => "doc-viewer.js" },
    outDir: "dist",
    cssCodeSplit: false,
    minify: true,
    sourcemap: false,
  },
  test: { environment: "node", include: ["src/**/*.test.ts"] },
});
