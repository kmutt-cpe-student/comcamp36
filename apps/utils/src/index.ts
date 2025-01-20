import { exec } from "child_process";
import chokidar from "chokidar";
import { promises as fs } from "fs";
import * as path from "path";
import ts from "typescript";

const SERVER_PATH = "../server/openapi.json";
const CLIENT_PATH = "./types.d.ts";

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
  const fileContents = await fs.readFile(path, "utf-8");
  console.log(`${GetDate()} File contents:\n${fileContents}`);
  generateType();
});

async function generateType() {
  exec(`prettier --write ${fullPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing prettier: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`Prettier stderr: ${stderr}`);
      return;
    }
    console.log(`Prettier stdout: ${stdout}`);
  });

  exec(
    `pnpm dlx openapi-typescript ${fullPath} -o ${CLIENT_PATH}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing openapi-typescript: ${error}`);
        return;
      }
      if (stderr) {
        console.error(`openapi-typescript stderr: ${stderr}`);
        return;
      }
      console.log(`openapi-typescript stdout: ${stdout}`);
    },
  );
}
