import { v4 as uuidv4 } from "uuid";

export interface Element {
  uuid: string;
  to: string;
  text: string;
  element: string;
}

export const elements: Element[] = [
  {
    uuid: uuidv4(),
    to: "/",
    text: "menu.about_me",
    element: "app.construction",
  },
  {
    uuid: uuidv4(),
    to: "/portfolio",
    text: "menu.portfolio",
    element: "app.construction",
  },
  {
    uuid: uuidv4(),
    to: "/service_pricing",
    text: "menu.services_prices",
    element: "app.construction",
  },
  {
    uuid: uuidv4(),
    to: "/resume",
    text: "menu.resume",
    element: "app.construction",
  },
  {
    uuid: uuidv4(),
    to: "/blog",
    text: "menu.blog",
    element: "app.construction",
  },
  {
    uuid: uuidv4(),
    to: "/contact",
    text: "menu.contact",
    element: "app.construction",
  },
];
