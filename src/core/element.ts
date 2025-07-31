export abstract class Element {
  private $parent: HTMLElement | null;

  get parent(): HTMLElement | null {
    return this.$parent;
  }

  constructor(parent?: HTMLElement) {
    this.$parent = parent ?? null;
  }

  abstract createElement(children?: HTMLElement[]): HTMLElement;
}
