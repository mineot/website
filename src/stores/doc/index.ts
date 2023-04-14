import { computed } from "vue";
import { defineStore } from "pinia";
import type { Document } from "@/stores/doc/document";

export const useDocStore = defineStore("doc", () => {
  let innerDoc: Document;

  const recoveryDocument = async (): Promise<Document> => {
    const langs = await fetch("./document.langs.json");
    const langDoc = await langs.json();

    const current: string = navigator.language.toLowerCase();
    let langDocKey: string | undefined = langDoc[current];
    if (!langDocKey) {
      langDocKey = langDoc.fallback;
    }

    const refDoc: any = await fetch(`./${langDocKey}`);
    return await refDoc.json() as Document;
  };

  const setDocument = (doc: Document) => {
    innerDoc = doc;
  };

  const document = computed((): Document => innerDoc);

  return { recoveryDocument, setDocument, document };
});
