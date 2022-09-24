import * as path from "path";

export const SERVER_PORT = 5432;
export const WEBPACK_DEVSERVER_PORT = 9000;

export const DIST_FOLDER = "dist";
export const STATIC_FOLDER = "static";

export const DIST_PATH = path.join(process.cwd(), DIST_FOLDER);
export const DIST_STATIC_PATH = path.join(process.cwd(), DIST_FOLDER, STATIC_FOLDER);
