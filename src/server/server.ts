import express from "express";
import path from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { DIST_PATH, DIST_STATIC_PATH, SERVER_PORT, STATIC_FOLDER } from "./constants";

const argv = yargs(hideBin(process.argv))
  .option("dev", {
    type: "boolean",
    description: "Run in dev mode, which changes where static assets are fetched from.",
  })
  .parseSync();

const app = express();

const indexHtmlPath = argv.dev ? DIST_PATH : __dirname;
const staticPath = argv.dev ? DIST_STATIC_PATH : path.resolve(__dirname, STATIC_FOLDER);

app.get("/", (_, res) => {
  res.sendFile(path.resolve(indexHtmlPath, "index.html"));
});
app.use("/static", express.static(staticPath));

app.listen(SERVER_PORT, () => {
  console.log(`Webserver started at http://localhost:${SERVER_PORT}`);
});
