---
name: Sample Document
description: A small document used to try the viewer.
license: MIT
---

# Sample Document

This is an introduction paragraph. It explains what the viewer can do:
read Markdown, show the source, and step through sections as slides.

## Getting Started

Add the script and place the element on your page.

```html
<script type="module" src="doc-viewer.js"></script>
<doc-viewer src="./sample.md"></doc-viewer>
```

### Search

Use Ctrl+F while the viewer has focus. Search matches headings first, then body text.
Special characters such as `.*(` are matched literally.

### Copy

The Copy button copies the whole source text of the selected file.

## Features

| Feature | Description |
|---|---|
| Preview | Rendered Markdown with a table of contents |
| Code | Source with line numbers |
| Slides | One slide per section |

- Works with a single file or a ZIP archive
- Untrusted Markdown is sanitized
- 日本語の本文も表示できます。検索は全角と半角を区別しません。

## Notes

1. Sections become slides.
2. Long sections scroll inside the slide.

> Blockquotes are styled too.

## Appendix

Closing remarks. Thank you for reading.
