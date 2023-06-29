import * as low from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

const jsonFilePath = '/db.json';
const adapter = new FileSync(jsonFilePath);
const db = (low as any)(adapter);

export { db };