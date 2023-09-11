import { Document } from "@/core/doc/document";

export const DefaultDocument: Document = {
  name: "John Doe",
  photo: "https://placehold.co/800x600",
  title: "Job Title",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis eget dui vel egestas. Sed id purus eget nulla convallis.",
  fastContact: [
    {
      name: "E-mail",
      icon: "bi bi-envelope-at-fill",
      key: "A1001",
      url: "mailto:contact@email.com",
      outside: false,
    },
    {
      name: "Phone",
      icon: "bi bi-telephone-fill",
      key: "B2002",
      url: "tel:+554712345678",
      outside: false,
    },
    {
      name: "WhatsApp",
      icon: "bi bi-whatsapp",
      key: "C3003",
      url: "https://web.whatsapp.com/",
      outside: true,
    },
    {
      name: "Telegram",
      icon: "bi bi-telegram",
      key: "D4004",
      url: "https://telegram.org/apps",
      outside: true,
    },
  ],
};
