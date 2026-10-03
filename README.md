# doc-viewer-element

Markdown / テキスト / ZIP の中身をページ内で読めるドキュメントビューア(Web Component `<doc-viewer>`)です。
React などのフレームワークは不要で、プレーンな HTML に JS を 1 本読み込むだけで使えます。

- 表示形式: Code(行番号付き原文)/ Preview(Markdown 描画 + 目次)/ Slides(セクションごとのスライド)
- ドキュメント内検索(見出し → 本文の順、正規表現は使わず文字どおりに一致)
- Copy(原文全体)
- ZIP を渡すと、ブラウザ内で展開して複数ファイルを一覧・切替表示
- Shadow DOM で隔離され、ページ側のスタイルと干渉しない。複数配置も可能
- 信頼できない Markdown を渡しても安全(`rehype-sanitize` で script・イベントハンドラ・`javascript:` リンクなどを除去)

デモは [demo/index.html](demo/index.html) にあります(後述の手順でビルドしてから、リポジトリのルートを静的配信して開きます)。

## 使い方

```html
<script type="module" src="/path/to/doc-viewer.js"></script>

<doc-viewer src="/docs/guide.md"></doc-viewer>
<doc-viewer src="/assets/bundle.zip"></doc-viewer>
```

`doc-viewer.js` は [Releases](https://github.com/yoshiyasu-soh/doc-viewer-element/releases) からダウンロードするか、自分でビルドして、**自分のサイトから配信してください**(Release のダウンロード URL は `<script type="module">` に必要な MIME タイプで配信されないため、直接は読み込めません)。

### 入力(いずれか 1 つ。優先順は `files` > `zip` > `fetcher` > `src`)

| 方法 | 内容 |
|---|---|
| `el.files = [{ path, kind, source }]` | ファイルの配列を直接渡す。`kind` は `"markdown"` または `"text"` |
| `el.zip = file` | `File` / `Blob` / `ArrayBuffer` / `Uint8Array` の ZIP を渡す |
| `el.fetcher = async () => ...` | 取得処理を呼び出し側が持つ。ファイル配列、または ZIP のバイト列(`Blob` など)を返す |
| `src="URL"` 属性 | URL から取得する。`.zip` の拡張子・`Content-Type`・先頭の `PK` ヘッダのいずれかで ZIP と判定し、それ以外は 1 つの Markdown / テキストとして扱う |

```html
<doc-viewer id="v"></doc-viewer>
<script>
  document.getElementById("v").files = [
    { path: "hello.md", kind: "markdown", source: "# Hello\n\n本文" },
  ];
</script>
```

別オリジンの URL を `src` で読む場合は、相手側で CORS を許可する必要があります。許可できない場合は、自分のサーバー経由で取得して `files` / `zip` で渡してください。

### ZIP の展開ルール

| 項目 | 内容 |
|---|---|
| 上限 | 1 ファイル 512KB、合計 2MB、100 ファイル |
| 除外 | NUL を含むバイナリ、`__MACOSX/`、`._` で始まるファイル、不正なパス(`..`・絶対パス・`\`) |
| 並び順 | `SKILL.md`(最も浅い階層)、次に `README.md`(同)を先頭にし、残りはパス順 |
| 安全策 | 展開前に ZIP 内の宣言サイズを検査し、上限を超えるものは展開しない。実サイズでも再検査する |

除外・上限超過があった場合は `doc-viewer-warning` イベントで通知されます。

### 属性・プロパティ

| 名前 | 種類 | 説明 |
|---|---|---|
| `src` | 属性 | 取得元の URL |
| `initial-tab` | 属性 | 最初に開くタブ。`preview`(既定)/ `code` / `slides` |
| `files` / `zip` / `fetcher` | プロパティ | 上記「入力」 |
| `labels` | プロパティ | UI 文言の差し替え(下記)。指定しなかったキーは既定値(英語) |

要素の定義より前にプロパティを設定しても(スクリプトの実行順によらず)反映されます。

### イベント

いずれも `bubbles` / `composed` です。

| イベント | `detail` | 発火のタイミング |
|---|---|---|
| `doc-viewer-ready` | `{ count }` | 表示の準備ができた(ファイル数) |
| `doc-viewer-warning` | `{ warnings: [{ reason, path }] }` | ZIP の展開で除外・上限超過があった。`reason` は `too-large` / `unsafe-path` / `binary` / `junk` / `limit` |
| `doc-viewer-error` | `{ message }` | 取得・展開に失敗した。画面には固定の文言のみ表示し、詳細はこのイベントで受け取る |

### 文言(`labels`)

```js
el.labels = { tabCode: "コード", tabPreview: "プレビュー", tabSlides: "スライド", search: "検索", copy: "コピー" };
```

指定できるキーと既定値は次のとおりです。`{n}` などはプレースホルダです。

| キー | 既定値 |
|---|---|
| `tablist` | View mode |
| `tabCode` / `tabPreview` / `tabSlides` | Code / Preview / Slides |
| `search` / `searchAria` / `searchPlaceholder` | Search / Search in document / Search... |
| `closeSearch` / `searchResults` | Close search / Search results |
| `matches` / `moreResults` / `noMatch` | {n} matches / {n} more / No matches |
| `copy` / `copied` / `copyDone` | Copy / Copied / Copied to clipboard |
| `copyFailed` | Copy failed. Select the source text and copy it manually. |
| `browseFiles` / `closeFileList` / `fileCount` | Browse files / Close file list / {n} files |
| `filterFiles` / `filterPlaceholder` | Filter files / Filter files... |
| `sourceView` | Source |
| `showFullDocument` / `onThisPage` | Show full document / On this page |
| `cover` / `prev` / `next` / `fullscreen` / `exit` | Cover / Prev / Next / Fullscreen / Exit |
| `slide` | Slide {n}: {title} |
| `slideGroup` | Select slide |
| `slideTokens` / `totalTokens` / `slideTokensTitle` | {current} / {total} tokens / {n} tokens / Current slide / total (estimated tokens) |
| `hintMove` / `hintFullscreen` / `hintExit` | move / fullscreen / exit |
| `license` / `total` | License / Total |
| `loading` / `empty` / `error` | Loading… / No documents to show. / Failed to load the document. |

トークン数は、非 ASCII を 1 文字 1 トークン、ASCII を 4 文字 1 トークンとする概算です。

### テーマ

ホスト要素に CSS 変数を設定して配色を変えられます。OS のダークテーマ(`prefers-color-scheme: dark`)には既定値で追従します。

```html
<doc-viewer src="./a.md" style="--docviewer-accent: #f97316; --docviewer-accent-ring: #ea580c"></doc-viewer>
```

| 変数 | 用途 |
|---|---|
| `--docviewer-bg` / `--docviewer-bg-subtle` | 背景 / 薄い背景(コード・ホバーなど) |
| `--docviewer-border` | 罫線 |
| `--docviewer-fg` / `--docviewer-fg-secondary` / `--docviewer-fg-muted` | 文字色(通常 / 補助 / 弱) |
| `--docviewer-accent` / `--docviewer-accent-ring` | 強調色(検索ハイライト・リンク下線)/ フォーカスリング |
| `--docviewer-danger` | エラー表示 |
| `--docviewer-font` / `--docviewer-mono` | 本文フォント / 等幅フォント |

## キー操作

- `Ctrl+F` / `⌘F`: ビューア内にフォーカスがあるときだけ、ブラウザ標準の検索を上書きしてドキュメント内検索を開く
- Slides(ビューア内にフォーカスがあるとき): `←` `→` / `PageUp` `PageDown` / `Home` `End` で移動、`F` で全画面。入力欄の操作中と検索中は無効。ビューアの外にあるキー操作は奪わない

## 対応ブラウザ

Custom Highlight API(Preview / Slides 本文の検索ハイライト)に対応したブラウザで動作します。非対応のブラウザでは、本文のハイライトのみ表示されません(検索結果の一覧と Code タブでは表示されます)。動作確認は Chromium のみで行っており、Firefox / Safari は未確認です。

## サイズ

`dist/doc-viewer.js` は約 157KB(gzip)です。Markdown の処理系(生 HTML の描画を含む)を同梱しているためです。

## 開発

```bash
npm install
npm run verify      # 型チェック・テスト・ビルド・クラス検査
node scripts/make-demo-zip.mjs   # demo/sample.zip を再生成(必要なときのみ)
```

`npm run build` で `dist/doc-viewer.js` ができます。デモを開くには、リポジトリのルートを静的に配信します(例: `python -m http.server 4174`)。`http://localhost:4174/demo/index.html` を開いてください。

## ライセンス

MIT
