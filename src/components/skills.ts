import { createElement } from "../core/element";

export function Skills(): HTMLElement {
  return createElement({
    tagName: "section",
    textContent: "Skills",
  });
}
