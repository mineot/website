import { Element } from "../../core/element";

export class MainContent extends Element {
  constructor(parent: HTMLElement) {
    super(parent);
  }

  createElement(children: HTMLElement[]): HTMLElement {
    const main = document.createElement("main");
    this.parent?.appendChild(main);

    children.forEach((child) => {
      main.appendChild(child);
    });

    return main;
  }
}
