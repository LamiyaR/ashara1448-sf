import { Fragment, type ReactNode } from "react";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Renders a plain string with markdown-style inline links: [label](url).
 * External (http/https) links open in a new tab. Everything else is plain text.
 */
export function InlineText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const re = new RegExp(LINK_RE);
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      nodes.push(<Fragment key={key++}>{text.slice(last, m.index)}</Fragment>);
    }
    const [, label, href] = m;
    const external = /^https?:\/\//.test(href);
    nodes.push(
      <a
        key={key++}
        href={href}
        className="font-medium text-secondary underline underline-offset-2 hover:no-underline"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
      </a>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(last)}</Fragment>);
  }
  return <>{nodes}</>;
}
