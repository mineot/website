import { Element } from "../core/element";

export class Skills extends Element {
  createElement(): HTMLElement {
    const section = document.createElement("section");
    section.textContent = "Skills";
    return section;
  }
}
