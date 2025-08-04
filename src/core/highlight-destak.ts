import { createElement } from "./element";

export function highlightDestak(text: string): HTMLElement[] {
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const regex = /\[([^\]:]+):destak\]/g;
  const result: HTMLElement[] = [];

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(
        createElement({
          tagName: "span",
          textContent: text.slice(lastIndex, match.index),
        })
      );
    }

    result.push(
      createElement({
        tagName: "span",
        classes: ["app-destak"],
        textContent: match[1],
      })
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    result.push(
      createElement({
        tagName: "span",
        textContent: text.slice(lastIndex),
      })
    );
  }

  return result;
}
