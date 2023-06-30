import { defineStore } from "pinia";
import type { Document } from "./db.facades";
import { DocumentDefault } from "./db.default";

const useDBStore = defineStore("db", {
  state: () => ({
    data: DocumentDefault
  }),
  getters: {
    document(): Document {
      return this.data as Document;
    }
  },
  actions: {
    async fetchData() {
      try {
        const langJson = await fetch("document.langs.json");
        const langDoc = await langJson.json();
        const docName = langDoc[navigator.language.toLowerCase()] ?? langDoc.fallback;
        const docJson = await fetch(docName);
        this.data = await docJson.json();
      } catch (error) {
        console.error(error);
      }
    }
  },
});

export { useDBStore, Document, DocumentDefault };