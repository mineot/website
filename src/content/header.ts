import { Element, type CreateElementReturn } from "../core/element";

export class Header extends Element {
  constructor(parent: HTMLElement) {
    super(parent);
  }

  createElement(): CreateElementReturn {
    const header = document.createElement("header");
    header.textContent = "Header";
    this.parent.appendChild(header);

    return header;
  }
}
