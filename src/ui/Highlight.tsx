import { Fragment, type JSX } from "preact";

/** 範囲指定された部分を <mark> で強調する。文字列は常に Preact が描画するため、検索語が HTML として解釈されることはない */
export default function Highlight({ text, ranges }: { text: string; ranges: [number, number][] }) {
  if (ranges.length === 0) return <>{text}</>;
  const parts: JSX.Element[] = [];
  let last = 0;
  ranges.forEach(([start, end], i) => {
    if (start > last) parts.push(<Fragment key={`t${i}`}>{text.slice(last, start)}</Fragment>);
    parts.push(
      <mark key={`m${i}`} className="doc-mark">
        {text.slice(start, end)}
      </mark>,
    );
    last = end;
  });
  if (last < text.length) parts.push(<Fragment key="tail">{text.slice(last)}</Fragment>);
  return <>{parts}</>;
}
