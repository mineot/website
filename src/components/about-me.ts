import { createElement } from "../core/element";

export function AboutMe(): HTMLElement {
  return createElement({
    tagName: "section",
    textContent: "About Me",
  });
}
