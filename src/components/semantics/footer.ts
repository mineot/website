import { createElement } from "../../core/element";

export function Footer(parent: HTMLElement): void {
  createElement({
    tagName: "footer",
    textContent: "Contact Us",
    parent,
  });
}
