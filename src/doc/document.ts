interface Contact {
  email: string;
  phone: string;
}

interface Person {
  name: string;
  contact: Contact;
  bio: string;
}

interface Document {
  person: Person;
}

export type { Document, Person, Contact };