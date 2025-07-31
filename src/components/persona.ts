import { Element } from "../core/element";

export class Persona extends Element {
  createElement(): HTMLElement {
    const section = document.createElement("section");
    section.textContent = "Persona";
    return section;
  }
}
