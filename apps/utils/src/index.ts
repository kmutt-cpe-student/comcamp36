import chokidar from "chokidar";
import { promises as fs } from "fs";
import openapiTS, { astToString } from "openapi-typescript";
import * as path from "path";
import ts from "typescript";

const SERVER_PATH = "../server/openapi.json";
const CLIENT_PATH = "../web/src/libs/server/types.d.ts";

const DATE = ts.factory.createTypeReferenceNode(
  ts.factory.createIdentifier("Date"),
);

const FILE = ts.factory.createTypeReferenceNode(
  ts.factory.createIdentifier("File"),
);
const NULL = ts.factory.createLiteralTypeNode(ts.factory.createNull());

function GetDate() {
  const currentTime = new Date().toLocaleString();
  return `[${currentTime}]`;
}

const fullPath = path.resolve(SERVER_PATH);
console.log(`${GetDate()} Full path to server directory: ${fullPath}`);

const watcher = chokidar.watch(SERVER_PATH);

watcher.on("ready", () => {
  console.log(`${GetDate()} Initial scan complete. Ready for changes`);
  console.log(watcher.getWatched());
});

watcher.on("change", async (path, stats) => {
  console.log(`${GetDate()} File ${path} has been changed`);
  await new Promise((resolve) => setTimeout(resolve, 10000));
  await generateType();
});

async function generateType() {
  const ast = await openapiTS(new URL("http://localhost:4000/api-json"), {
    transform(schemaObject, _metadata) {
      if (schemaObject.format === "binary") {
        return schemaObject.nullable
          ? ts.factory.createUnionTypeNode([FILE, NULL])
          : FILE;
      }
    },

    additionalProperties: false,
  });
  const contents = astToString(ast);

  await fs.writeFile(CLIENT_PATH, contents);
}
