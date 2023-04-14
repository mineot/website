import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { Document } from "@/stores/doc/document";

export const useDocStore = defineStore("doc", () => {
  const innerDoc = ref();

  const recoveryDocument = async (): Promise<void> => {
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

  const document = computed((): Document => innerDoc.value as Document);

  return { recoveryDocument, document };
});
