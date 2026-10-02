import { readFileSync, writeFileSync } from "node:fs";
import { strToU8, zipSync } from "fflate";

const sample = readFileSync("demo/sample.md", "utf8");
const zip = zipSync({
  "README.md": strToU8(sample),
  "docs/guide.md": strToU8("# Guide\n\nA second file inside the archive.\n\n## Usage\n\nPick files from the Folder panel.\n"),
  "notes.txt": strToU8("Plain text notes.\nThese are shown as text.\n"),
});
writeFileSync("demo/sample.zip", zip);
console.log(`demo/sample.zip: ${zip.length} bytes`);
