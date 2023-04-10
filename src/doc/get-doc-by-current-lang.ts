import type { Document } from "@/doc/document";

const langJson: any = await fetch("./document.lang.json");
const langDoc: any = await langJson.json();
const langCurrent: string = navigator.language.toLowerCase();
const doc = await fetch(`./${langDoc[langCurrent]}`);

export default await doc.json() as Document;
