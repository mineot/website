interface Social {
  name: string;
  src: string;
}

interface Language {
  name: string;
  level: number;
}

interface Contact {
  email?: string;
  phone?: string;
  whatsapp?: string;
  telegram?: string;
}

interface Person {
  photo: string;
  name: string;
  bio: string;
  contact?: Contact;
  socials?: Social[];
  languages?: Language[];
}

interface Document {
  person: Person;
}

export type {
  Contact,
  Document,
  Language,
  Person,
  Social,
};
