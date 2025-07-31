import { Element } from "../../core/element";

export class Header extends Element {
  constructor(parent: HTMLElement) {
    super(parent);
  }

  createElement(): HTMLElement {
    const header = document.createElement("header");
    header.textContent = "Header";
    this.parent?.appendChild(header);
    return header;
  }
}
