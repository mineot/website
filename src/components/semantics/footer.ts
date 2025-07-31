import { Element } from "../../core/element";

export class Footer extends Element {
  constructor(parent: HTMLElement) {
    super(parent);
  }

  createElement(): HTMLElement {
    const footer = document.createElement("footer");
    footer.textContent = "Contact Us";
    this.parent?.appendChild(footer);
    return footer;
  }
}
