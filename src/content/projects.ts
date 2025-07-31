import { Element } from "../core/element";

export class Projects extends Element {
  createElement(): HTMLElement {
    const section = document.createElement("section");
    section.textContent = "Projects";
    return section;
  }
}
