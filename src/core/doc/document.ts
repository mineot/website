interface FastContact {
  name?: string;
  icon?: string;
  key: string;
  url: string;
  outside: boolean;
}

export interface Document {
  name: string;
  photo: string;
  title: string;
  summary: string;
  fastContacts: Array<FastContact>;
}
