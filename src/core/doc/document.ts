export interface DocumentFacade {
  name: string;
  photo: string;
  title: string;
  summary: string;
  fastContact: Array<{
    name?: string;
    icon?: string;
    key: string;
    url: string;
    outside: boolean;
  }>;
}
