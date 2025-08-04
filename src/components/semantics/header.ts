import { createElement } from "../../core/element";

const data = {
  h1: "Welcome to My Website",
  links: [
    { name: "Link 1", url: "https://www.link1.com/" },
    { name: "Link 2", url: "https://www.link2.com/" },
    { name: "Link 3", url: "https://www.link3.com/" },
  ],
};

export function Header(parent: HTMLElement): void {
  createElement({
    parent,
    tagName: "header",
    classes: ["app-header"],
    children: [
      createElement({
        tagName: "h1",
        textContent: data.h1,
      }),
      createElement({
        tagName: "nav",
        children: [
          createElement({
            tagName: "ul",
            children: data.links.map((link) =>
              createElement({
                tagName: "li",
                children: [
                  createElement({
                    tagName: "a",
                    attributes: [
                      { key: "href", value: link.url },
                      { key: "target", value: "_blank" },
                      { key: "rel", value: "noopener noreferrer" },
                    ],
                    textContent: link.name,
                  }),
                ],
              })
            ),
          }),
        ],
      }),
    ],
  });
}
