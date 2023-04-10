export interface Contact {
  email: string;
  phone: string;
}

export interface Person {
  name: string;
  contact: Contact;
  bio: string;
}

export interface Document {
  person: Person;
}
