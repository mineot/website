import { Element } from "../core/element";

const data = {
  personalInfo: {
    image: "https://placehold.co/72x72",
    name: "John Doe",
    title: "Profession Name",
    contact: [
      { icon: "(i)", text: "Contact 1" },
      { icon: "(i)", text: "Contact 2" },
      { icon: "(i)", text: "Contact 3" },
    ],
    socials: [
      { name: "Social 1", value: "https://social1.example.com" },
      { name: "Social 2", value: "https://social2.example.com" },
      { name: "Social 3", value: "https://social3.example.com" },
    ],
    resume: null,
  },
  board: {
    title: "Board Title",
    hello: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    links: [
      { name: "Link 1", url: "https://link1.example.com" },
      { name: "Link 2", url: "https://link2.example.com" },
      { name: "Link 3", url: "https://link3.example.com" },
    ],
  },
  panel: [
    { name: "Item", value: "1" },
    { name: "Item", value: "2" },
    { name: "Item", value: "3" },
  ],
};

export class Persona extends Element {
  createElement(): HTMLElement {
    const section = document.createElement("section");
    section.classList.add("app-persona");
    section.appendChild(registerPersonalInfo());
    section.appendChild(registerBoard());
    section.appendChild(registerPanel());
    return section;
  }
}

function registerPersonalInfo() {
  const div = document.createElement("div");
  div.classList.add("personal-info");

  const img = document.createElement("img");
  img.src = data.personalInfo.image;
  div.appendChild(img);

  const name = document.createElement("div");
  name.classList.add("name");
  div.appendChild(name);

  const h2 = document.createElement("h2");
  h2.textContent = data.personalInfo.name;
  name.appendChild(h2);

  const h3 = document.createElement("h3");
  h3.textContent = data.personalInfo.title;
  name.appendChild(h3);

  const contactList = document.createElement("ul");
  contactList.classList.add("contact-list");
  div.appendChild(contactList);

  data.personalInfo.contact.forEach((contact) => {
    const li = document.createElement("li");
    contactList.appendChild(li);

    const i = document.createElement("i");
    i.textContent = contact.icon;
    li.appendChild(i);

    const span = document.createElement("span");
    span.textContent = contact.text;
    li.appendChild(span);
  });

  const socialList = document.createElement("ul");
  div.appendChild(socialList);

  data.personalInfo.socials.forEach((social) => {
    const li = document.createElement("li");
    li.textContent = social.name;
    socialList.appendChild(li);
  });

  const resume = document.createElement("span");
  resume.textContent = data.personalInfo.resume
    ? "Resume available"
    : "No resume available";
  div.appendChild(resume);

  return div;
}

function registerBoard() {
  const div = document.createElement("div");
  div.classList.add("board");

  const title = document.createElement("h2");
  title.textContent = data.board.title;
  div.appendChild(title);

  const hello = document.createElement("p");
  hello.textContent = data.board.hello;
  div.appendChild(hello);

  const message = document.createElement("p");
  message.textContent = data.board.message;
  div.appendChild(message);

  const linkList = document.createElement("ul");
  div.appendChild(linkList);

  data.board.links.forEach((link) => {
    const li = document.createElement("li");
    linkList.appendChild(li);

    const a = document.createElement("a");
    li.appendChild(a);

    a.href = link.url;
    a.textContent = link.name;
    a.target = "_blank";
  });

  return div;
}

function registerPanel() {
  const panel = document.createElement("div");
  panel.classList.add("panel");

  data.panel.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = `${item.value} ${item.name}`;
    panel.appendChild(p);
  });

  return panel;
}
