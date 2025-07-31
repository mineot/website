import { Element } from "../core/element";

export class AboutMe extends Element {
  createElement(): HTMLElement {
    const section = document.createElement("section");
    section.textContent = "About Me";
    return section;
  }
}
