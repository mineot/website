export const ContactIcon = {
  ["email" as string]: "mdi-email",
  ["phone" as string]: "mdi-phone",
  ["whatsapp" as string]: "mdi-cellphone-message",
  ["telegram" as string]: "mdi-cellphone-message",
};

export const ContactHref = (key: string, val: string): string => {
  if (key === "email") {
    return `mailto:${val}`;
  } else if (key === "phone") {
    return `tel:${val}`;
  }

  return val;
};

export const ContactTarget = (key: string): string => {
  return key === "whatsapp" || key === "telegram" ? "blank" : "";
};
