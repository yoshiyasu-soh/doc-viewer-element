import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const css = readdirSync("dist")
  .filter((f) => f.endsWith(".js"))
  .map((f) => readFileSync(join("dist", f), "utf8"))
  .join("\n");

// トークン系のクラス(bg-surface, text-ink-secondary, border-border, ring-signal-ring など)
const TOKEN = /\b(?:bg|text|border|ring|decoration|from|to|via|divide|fill|stroke)-(?:ink(?:-[a-z]+)?|surface(?:-2)?|border|signal(?:-ring)?|danger)(\/\d+)?\b/g;
const used = new Set();
const withAlpha = [];
for (const f of walk("src/ui").filter((f) => /\.(ts|tsx)$/.test(f))) {
  for (const m of readFileSync(f, "utf8").matchAll(TOKEN)) {
    used.add(m[0]);
    if (m[1]) withAlpha.push(`${f}: ${m[0]}`);
  }
}

// CSS 文字列内ではセレクタが `.text-ink-secondary` または `.text-ink-secondary` のエスケープ形で現れる
const missing = [...used].filter((c) => !css.includes(`.${c}`));
if (withAlpha.length) console.error("アルファ修飾子は使えません:\n" + withAlpha.join("\n"));
if (missing.length) console.error("CSS に出力されていないクラス:\n" + missing.join("\n"));
if (withAlpha.length || missing.length) process.exit(1);
console.log(`クラス検査 OK(${used.size} 種)`);
