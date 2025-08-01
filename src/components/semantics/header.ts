import { Element } from "../../core/element";

const data = {
  h1: "Welcome to My Website",
  socials: [
    { name: "Link 1", url: "https://www.link1.com/" },
    { name: "Link 2", url: "https://www.link2.com/" },
    { name: "Link 3", url: "https://www.link3.com/" },
  ],
};

export class Header extends Element {
  constructor(parent: HTMLElement) {
    super(parent);
  }

  createElement(): HTMLElement {
    const header = document.createElement("header");
    header.classList.add("header");
    this.parent?.appendChild(header);

    const h1 = document.createElement("h1");
    h1.textContent = data.h1;
    header.appendChild(h1);

    const nav = document.createElement("nav");
    header.appendChild(nav);

    const navList = document.createElement("ul");
    nav.appendChild(navList);

    data.socials.forEach((item) => {
      const li = document.createElement("li");
      navList.appendChild(li);

      const a = document.createElement("a");
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = item.name;
      li.appendChild(a);
    });

    return header;
  }
}
