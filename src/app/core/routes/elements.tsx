import { v4 as uuidv4 } from "uuid";
import { AboutMe } from "@/app/pages/about_me";
import { Portfolio } from "@/app/pages/portfolio";
import { ServicesPrices } from "@/app/pages/services_prices";
import { Resume } from "@/app/pages/resume";
import { Blog } from "@/app/pages/blog";
import { Contact } from "@/app/pages/contact";

export interface Element {
  uuid: string;
  to: string;
  text: string;
  icon: string;
  element: any;
}

export const elements: Element[] = [
  {
    uuid: uuidv4(),
    to: "/",
    text: "menu.about_me",
    icon: "person-fill",
    element: <AboutMe></AboutMe>,
  },
  {
    uuid: uuidv4(),
    to: "/portfolio",
    text: "menu.portfolio",
    icon: "file-code-fill",
    element: <Portfolio></Portfolio>,
  },
  {
    uuid: uuidv4(),
    to: "/service_pricing",
    text: "menu.services_prices",
    icon: "tools",
    element: <ServicesPrices></ServicesPrices>,
  },
  {
    uuid: uuidv4(),
    to: "/resume",
    text: "menu.resume",
    icon: "file-earmark-text-fill",
    element: <Resume></Resume>,
  },
  {
    uuid: uuidv4(),
    to: "/blog",
    text: "menu.blog",
    icon: "link-45deg",
    element: <Blog></Blog>,
  },
  {
    uuid: uuidv4(),
    to: "/contact",
    text: "menu.contact",
    icon: "chat-left-fill",
    element: <Contact></Contact>,
  },
];
