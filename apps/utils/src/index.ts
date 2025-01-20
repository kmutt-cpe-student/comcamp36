import chokidar from "chokidar";
import * as path from "path";

const SERVER_PATH = "../../server/";

const fullPath = path.resolve(SERVER_PATH);
console.log(`Full path to server directory: ${fullPath}`);

const watcher = chokidar.watch("../server/openapi.json");

watcher.on("ready", () => {
  console.log("Initial scan complete. Ready for changes");
  console.log(watcher.getWatched());
});

watcher.on("change", async (path, stats) => {
  console.log(`File ${path} has been changed`);
});
