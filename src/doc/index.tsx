import React, { createContext, useContext, useEffect, useState } from "react";
import { ComponentArgs } from "@/contracts/react-params";
import { Document } from "./document";
import { loadAdditionalResource } from "@/core/i18n";
import i18n from "i18next";

const DocumentContext = createContext<Document | null>(null);

export const DocumentProvider: React.FC<ComponentArgs> = ({ children }) => {
  const [document, setDocument] = useState<Document | null>(null);

  const initDoc = async () => {
    await loadAdditionalResource();
    setDocument(i18n.getResourceBundle(i18n.language, "document"));
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

export const useDocument = (): Document | null => {
  return useContext(DocumentContext);
};
