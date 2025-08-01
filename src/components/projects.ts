import { createElement } from "../core/element";

export function Projects(): HTMLElement {
  return createElement({
    tagName: "section",
    textContent: "Projects",
  });
}
