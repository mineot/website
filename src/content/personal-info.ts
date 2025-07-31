import { Element, type CreateElementReturn } from "../core/element";

export class PersonalInfo extends Element {
  constructor(parent: HTMLElement) {
    super(parent);
  }

  createElement(): CreateElementReturn {
    const personalInfo = document.createElement("section");
    personalInfo.textContent = "Personal Info";
    this.parent.appendChild(personalInfo);

    return personalInfo;
  }
}
