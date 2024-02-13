/* eslint-disable @typescript-eslint/no-var-requires */
// copy prod DB to dev DB (duplicate prod DB and rename it to dev DB)
const fs: typeof import("fs") = require("fs");

const devDb = process.env.DEV_DATABASE_URL;
const prodDb = process.env.PROD_DATABASE_URL;

if (!devDb) {
  throw new Error("DEV_DATABASE_URL is not set");
}

if (!prodDb) {
  throw new Error("PROD_DATABASE_URL is not set");
}

fs.copyFileSync(prodDb, devDb);

console.log("Prod DB copied to dev DB successfully");
