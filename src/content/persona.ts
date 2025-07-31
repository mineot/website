import { Element, type CreateElementReturn } from "../core/element";

export class Persona extends Element {
  constructor(parent: HTMLElement) {
    super(parent);
  }

  createElement(): CreateElementReturn {
    const section = document.createElement("section");
    section.textContent = "Persona";
    this.parent.appendChild(section);

    return section;
  }
}
