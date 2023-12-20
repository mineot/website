import { v4 as uuidv4 } from "uuid";
import { I18NKeys } from "../i18n";

import { AboutMe } from "@/pages/about_me";
import { Portfolio } from "@/pages/portfolio";
import { ServicesPrices } from "@/pages/services_prices";
import { Resume } from "@/pages/resume";
import { Blog } from "@/pages/blog";
import { Contact } from "@/pages/contact";

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
    text: I18NKeys.pages.about_me.title,
    icon: "person-fill",
    element: <AboutMe></AboutMe>,
  },
  {
    uuid: uuidv4(),
    to: "/portfolio",
    text: I18NKeys.pages.portfolio.title,
    icon: "file-code-fill",
    element: <Portfolio></Portfolio>,
  },
  {
    uuid: uuidv4(),
    to: "/service_pricing",
    text: I18NKeys.pages.services_prices.title,
    icon: "tools",
    element: <ServicesPrices></ServicesPrices>,
  },
  {
    uuid: uuidv4(),
    to: "/resume",
    text: I18NKeys.pages.resume.title,
    icon: "file-earmark-text-fill",
    element: <Resume></Resume>,
  },
  {
    uuid: uuidv4(),
    to: "/blog",
    text: I18NKeys.pages.blog.title,
    icon: "link-45deg",
    element: <Blog></Blog>,
  },
  {
    uuid: uuidv4(),
    to: "/contact",
    text: I18NKeys.pages.contact.title,
    icon: "chat-left-fill",
    element: <Contact></Contact>,
  },
];
