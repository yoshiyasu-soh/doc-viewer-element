# doc-viewer-element 設計書

作成日: 2026-10-03 / 状態: レビュー待ち

## 1. 目的と成功基準

プレーンな HTML に JS を1本読み込むだけで、Markdown/テキスト単体または ZIP の中身を読める
ドキュメントビューア `<doc-viewer>` を提供する。

成功基準:

- `<script type="module" src="doc-viewer.js">` と `<doc-viewer src="...">` だけで動く(React 等の事前導入不要)
- Code / Preview / Slides、検索、Copy、ファイル一覧(Folder)が動く(機能範囲は第6章)
- `.zip` を指定すると、ブラウザ内で展開して複数ファイルを表示できる
- 同一ページに複数インスタンスを置いても干渉しない
- 信頼できない Markdown を渡しても安全(サニタイズ維持)

## 2. 前提(確定事項)

- 実装は本リポジトリ内で完結させる。外部サイトやアプリ固有の情報(名称・URL・パス・API・設定・サンプルデータ)は、コード・ドキュメント・テスト・デモ・コミット履歴のいずれにも含めない
- 配布: 本リポジトリ(GitHub パブリック、MIT)。単一 JS は GitHub Release に添付する。npm 公開は今回の対象外
- リポジトリ名・npm 名 `doc-viewer-element`、タグ名 `<doc-viewer>`
- 運用: `main` へ直接コミット。Conventional Commits・日本語

## 3. アーキテクチャ

- UI は Preact(`preact/compat` を alias)。React 同梱で約200KB gzip のところ、約60〜80KB gzip を見込む。`react-markdown` が動かない場合のみ React 同梱へ戻す
- `<doc-viewer>` は Shadow DOM(open)。スタイルは `adoptedStyleSheets`(非対応環境は `<style>`)で注入する
- ビルドは Vite の library モード(ES module、単一ファイル、全依存を同梱)

```
src/lib/        parseDoc / search / tokens / types(純粋関数)、unzip(ZIP 展開)
src/ui/         DocViewer ほか UI コンポーネント(取得処理は含めない)
src/element.ts  <doc-viewer> 定義(属性・プロパティ・イベント)
src/styles/     プリコンパイル CSS(--docviewer-* 変数)
demo/           プレーン HTML のデモ(サンプル md / zip を含む)
.github/workflows/ci.yml  型チェック・テスト・ビルド
```

## 4. 公開 API

```html
<script type="module" src="doc-viewer.js"></script>
<doc-viewer src="/docs/SKILL.md"></doc-viewer>
<doc-viewer src="/assets/my-skill.zip"></doc-viewer>
```

### 入力(いずれか1つ。優先順は下記)

| 経路 | 内容 |
|---|---|
| `el.files = [{ path, kind, source }]` | ファイル配列を直接渡す |
| `el.zip = File \| Blob \| ArrayBuffer` | ZIP を渡す。ブラウザ内で展開する |
| `el.fetcher = async () => files \| Blob` | 取得処理を呼び出し側が持つ。ファイル配列か ZIP の Blob を返せる |
| `src` 属性 | URL。種別は自動判定する |

優先順は `files` > `zip` > `fetcher` > `src`。`src` の判定は、拡張子 `.zip`、Content-Type、先頭の `PK` マジックバイトのいずれかで ZIP とし、それ以外は単一の Markdown/テキストとして扱う。単一ファイルの `kind` は拡張子から決める。

### 設定

- `el.labels = { ... }`: UI 文言の差し替え(既定は英語。未指定のキーは既定値)
- `initial-tab` 属性: `preview`(既定) / `code` / `slides`
- テーマ: `--docviewer-bg` `--docviewer-fg` `--docviewer-muted` `--docviewer-border` `--docviewer-accent` `--docviewer-font` `--docviewer-mono` など。ホスト要素に CSS 変数を設定して変更する。`prefers-color-scheme: dark` に追従する既定値を持つ

### イベント

- `doc-viewer-ready`: 表示準備完了(detail: ファイル数)
- `doc-viewer-warning`: 展開で除外・上限超過があった(detail: 件数と理由)
- `doc-viewer-error`: 取得・展開の失敗(detail: メッセージ)

### 状態表示

ローディング、空、エラーの3状態をビューア内に表示する(文言は `labels` で差し替え可能)。

## 5. ZIP 展開(`src/lib/unzip.ts`)

fflate の展開側のみを取り込み、約 8KB gzip の増加を見込む。

- 上限: 1ファイル512KB・合計2MB・100ファイル
- 展開前に ZIP 内の宣言サイズを検査し、上限超過のエントリは展開しない(ZIP 爆弾対策)。宣言サイズと実サイズの不一致も除外する
- 除外: NUL を含むバイナリ、`__MACOSX/`、`._*`、不正パス(`../`、絶対パス、バックスラッシュ)
- 並び順: SKILL.md(最浅)を先頭、以降はパス順
- 除外・上限超過は `doc-viewer-warning` で通知する

## 6. 設計上の対処事項と機能範囲

| 項目 | 対応 |
|---|---|
| スタイル | プリコンパイル CSS + `--docviewer-*` 変数で完結させる。Markdown 本文のスタイルもライブラリ側に持つ |
| DOM 参照 | `document` 全体の参照を使わず、`useId`、ref、`shadowRoot` 内参照のみとする。複数インスタンス・ID 衝突に耐える |
| CSS Custom Highlight API | Shadow DOM 内での動作を最初に実ブラウザで検証する。動けばそのまま採用、動かなければ範囲指定の `<mark>` 方式へ切り替える。非対応ブラウザでは本文ハイライトのみ出ないことを許容 |
| UI 文言 | 全文言を `labels` に集約し、既定は英語 |
| サニタイズ | `rehype-sanitize` を必須とする(利用側が信頼できない入力を渡す前提) |
| プラグイン順 | `[rehypeRaw, rehypeSanitize]` の順(サニタイズを最後に置く) |
| Ctrl+F | ビューア内にフォーカスがあるときだけブラウザ標準を上書きする |
| `src` の別オリジン | CORS が必要。README に明記し、`files` / `zip` 直接指定を併用できるようにする |

機能の範囲: Code / Preview / Slides、目次、検索、Copy、ファイル一覧。検索は選択中ファイルのみ、ツリー表示はフラットのみ、トークン数は推定値、モバイルは閲覧のみ。

## 7. 検証

- 純粋関数: vitest。`parseDoc` / `search` のテストと、`unzip` のテスト(宣言サイズ超過・不正パス・バイナリ除外・SKILL.md 先頭化)
- 要素: Playwright でデモ(プレーン HTML)を開き、次を手動スクリプトで確認する
  - Preview / Code / Slides の切り替え、検索・ハイライト・ジャンプ、Copy
  - `src`(md)・`src`(zip)・`el.zip`・`el.files`・`el.fetcher` の各経路
  - 同一ページ複数インスタンス、ダークテーマ、幅390pxで横スクロールなし
  - ZIP の上限超過で警告イベントが出ること
- ビルド: `tsc --noEmit` と `vite build` が成功し、バンドルサイズ(gzip)を計測して報告する
- CI: GitHub Actions で型チェック・テスト・ビルドを実行する(E2E は CI 対象外)

## 8. スコープ外

ツリー表示、URL クエリへの状態反映、全ファイル横断検索、Slides の自動分割、npm 公開、Lighthouse 計測。

## 9. リスク

- `react-markdown` の Preact 互換: `preact/compat` の alias で動作を確認済み(2026-10-03)
- Shadow DOM 内の Custom Highlight API: Chromium で動作を確認済み(Preview 本文・見出しに強調が出る)。`<mark>` 方式へのフォールバックは不要だった
- `fullscreen`(Slides): Shadow DOM 内の要素で動作し、`document.fullscreenElement` はホスト要素に丸められるため、判定には `shadowRoot.fullscreenElement` を使う(Chromium で確認済み)
- バンドルサイズ: 当初見込み(約 60〜80KB gzip)を超え、約 141KB gzip(vite 8 で約 157KB から減少)(React/Preact 本体ではなく Markdown 処理が主因)。軽量化は機能とのトレードオフ(例: 生 HTML の描画に使う `rehype-raw` の除外)になるため、今回は機能を優先した
- 動作確認は Chromium のみ。Firefox / Safari は未確認

## 10. 作業手順(概要。詳細は実装計画で定める)

1. リポジトリ作成(GitHub パブリック、MIT)、雛形、CI
2. 純粋関数とテスト、`unzip` の実装
3. UI の Preact 実装と Shadow DOM 化(ハイライト方式の検証を含む)
4. `<doc-viewer>` 要素と API、デモ
5. Playwright 確認、サイズ計測、README(日本語)、v0.1.0 Release
