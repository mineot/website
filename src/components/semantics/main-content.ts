import { createElement } from "../../core/element";

export function MainContent(
  parent: HTMLElement,
  children: HTMLElement[]
): void {
  createElement({
    tagName: "main",
    parent,
    children,
  });
}
