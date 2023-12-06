import { v4 as uuidv4 } from "uuid";

export interface Element {
  uuid: string;
  to: string;
  text: string;
  icon: string;
  element: string;
}

export const elements: Element[] = [
  {
    uuid: uuidv4(),
    to: "/",
    text: "menu.about_me",
    icon: "person-fill",
    element: "app.construction",
  },
  {
    uuid: uuidv4(),
    to: "/portfolio",
    text: "menu.portfolio",
    icon: "file-code-fill",
    element: "app.construction",
  },
  {
    uuid: uuidv4(),
    to: "/service_pricing",
    text: "menu.services_prices",
    icon: "tools",
    element: "app.construction",
  },
  {
    uuid: uuidv4(),
    to: "/resume",
    text: "menu.resume",
    icon: "file-earmark-text-fill",
    element: "app.construction",
  },
  {
    uuid: uuidv4(),
    to: "/blog",
    text: "menu.blog",
    icon: "link-45deg",
    element: "app.construction",
  },
  {
    uuid: uuidv4(),
    to: "/contact",
    text: "menu.contact",
    icon: "chat-left-fill",
    element: "app.construction",
  },
];
