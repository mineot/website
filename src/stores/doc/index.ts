import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { Document } from "@/stores/doc/document";

export const useDocStore = defineStore("doc", () => {
  const innerDoc = ref();

  const loadDocument = async (): Promise<void> => {
    if (innerDoc.value) {
      return;
    }

    const langs = await fetch("./document.langs.json");
    const langDoc = await langs.json();

    const current: string = navigator.language.toLowerCase();
    let langDocKey: string | undefined = langDoc[current];
    if (!langDocKey) {
      langDocKey = langDoc.fallback;
    }

    const refDoc: any = await fetch(`./${langDocKey}`);
    innerDoc.value = await refDoc.json() as Document;
  };

  const loaded = computed((): boolean => {
    return innerDoc.value;
  });

  const document = computed((): Document => {
    return innerDoc.value as Document;
  });

  return { loadDocument, loaded, document };
});
