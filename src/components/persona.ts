import { createElement } from "../core/element";
import { highlightDestak } from "../core/highlight-destak";

const data = {
  info: {
    image: "https://placehold.co/72x72",
    name: "John Doe",
    title: "Profession Name",
    contacts: [
      { icon: "(i)", text: "Contact 1" },
      { icon: "(i)", text: "Contact 2" },
      { icon: "(i)", text: "Contact 3" },
    ],
    links: [
      { name: "Link 1", value: "https://link1.example.com" },
      { name: "Link 2", value: "https://link2.example.com" },
      { name: "Link 3", value: "https://link3.example.com" },
    ],
    resume: null,
  },
  banner: {
    title: "Banner Title",
    subtitle:
      "Lorem [ipsum:destak] dolor sit amet, consectetur adipiscing elit.",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    links: [
      { name: "Link 1", url: "https://link1.example.com" },
      { name: "Link 2", url: "https://link2.example.com" },
      { name: "Link 3", url: "https://link3.example.com" },
    ],
  },
  details: [
    { name: "Item", value: "1" },
    { name: "Item", value: "2" },
    { name: "Item", value: "3" },
  ],
};

export function Persona(): HTMLElement {
  return createElement({
    tagName: "section",
    classes: ["app-persona"],
    children: [
      createElement({
        tagName: "div",
        classes: ["info"],
        children: [
          createElement({
            tagName: "img",
            attributes: [{ key: "src", value: data.info.image }],
          }),
          createElement({
            tagName: "div",
            classes: ["names"],
            children: [
              createElement({
                tagName: "h2",
                textContent: data.info.name,
              }),
              createElement({
                tagName: "h3",
                textContent: data.info.title,
              }),
            ],
          }),
          createElement({
            tagName: "ul",
            classes: ["contact-list"],
            children: data.info.contacts.map((contact) =>
              createElement({
                tagName: "li",
                children: [
                  createElement({ tagName: "i", textContent: contact.icon }),
                  createElement({ tagName: "span", textContent: contact.text }),
                ],
              })
            ),
          }),
          createElement({
            tagName: "ul",
            children: data.info.links.map((link) =>
              createElement({
                tagName: "li",
                textContent: link.name,
              })
            ),
          }),
          createElement({
            tagName: "span",
            textContent: data.info.resume
              ? "Resume available"
              : "No resume available",
          }),
        ],
      }),
      createElement({
        tagName: "div",
        classes: ["banner"],
        children: [
          createElement({ tagName: "h2", textContent: data.banner.title }),
          createElement({
            tagName: "p",
            classes: ["subtitle"],
            children: highlightDestak(data.banner.subtitle),
          }),
          createElement({
            tagName: "p",
            classes: ["message"],
            textContent: data.banner.message,
          }),
          createElement({
            tagName: "ul",
            children: data.banner.links.map((link) =>
              createElement({
                tagName: "li",
                children: [
                  createElement({
                    tagName: "a",
                    textContent: link.name,
                    attributes: [
                      { key: "href", value: link.url },
                      { key: "target", value: "_blank" },
                    ],
                  }),
                ],
              })
            ),
          }),
        ],
      }),
      createElement({
        tagName: "div",
        classes: ["details"],
        children: data.details.map((item) =>
          createElement({
            tagName: "p",
            textContent: `${item.value} ${item.name}`,
          })
        ),
      }),
    ],
  });
}
