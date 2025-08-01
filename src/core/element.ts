export interface ElementParam {
  tagName: string;
  parent?: HTMLElement;
  attributes?: { key: string; value: string }[];
  textContent?: string;
  classes?: string[];
  children?: HTMLElement[];
}

export function createElement(param: ElementParam): HTMLElement {
  const element = document.createElement(param.tagName);

  if (param.parent) {
    param.parent.appendChild(element);
  }

  if (param.attributes) {
    for (const { key, value } of param.attributes) {
      element.setAttribute(key, value);
    }
  }

  if (param.textContent) {
    element.textContent = param.textContent;
  }

  if (param.classes) {
    for (const className of param.classes) {
      element.classList.add(className);
    }
  }

  if (param.children) {
    for (const child of param.children) {
      element.appendChild(child);
    }
  }

  return element;
}
