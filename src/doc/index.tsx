import React, { createContext, useContext, useEffect, useState } from "react";
import { Document } from "./document";

const langs = {
  ["en" as string]: "en",
  ["pt" as string]: "pt",
  ["en-us" as string]: "en",
  ["pt-br" as string]: "pt",
};

const DocumentContext = createContext<Document | undefined>(undefined);

export const DocumentProvider: React.FC = ({ children }: any) => {
  const [document, setDocument] = useState<Document | undefined>(undefined);

  // Função para inicializar o documento
  const initDoc = async () => {
    const lang: string = navigator.language.toLowerCase();
    const current: string = langs[lang] ?? "en";
    const res = await fetch(`/doc/${current}.json`);

    if (res.ok) {
      const data = await res.json();
      setDocument(data);
    }
  };

  useEffect(() => {
    initDoc();
  }, []);

  return (
    <DocumentContext.Provider value={document}>
      {children}
    </DocumentContext.Provider>
  );
};

export const useDocument = (): Document | undefined => {
  return useContext(DocumentContext);
};
