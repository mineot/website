export type CreateElementReturn = HTMLElement | null;

export abstract class Element {
  private $parent: HTMLElement;

  get parent(): HTMLElement {
    return this.$parent;
  }

  constructor(parent: HTMLElement) {
    this.$parent = parent;
  }

  abstract createElement(): CreateElementReturn;
}
