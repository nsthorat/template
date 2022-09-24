import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
// We use require() here because this module has no typings.
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import { Configuration as WebpackConfiguration } from "webpack";

import { DIST_PATH, SERVER_PORT, WEBPACK_DEVSERVER_PORT } from "./src/server/constants";

export const INDEX_HTML_OPTIONS: HtmlWebpackPlugin.Options = {
  title: "Webserver",
  publicPath: "/",
  template: path.join(__dirname, "src/server/web/index.html"),
};

export const WEBPACK_DEVSERVER_CONFIG: WebpackDevServerConfiguration = {
  port: WEBPACK_DEVSERVER_PORT,
  // Automatically refresh pages when typescript changes.
  hot: true,
  // Opens the browser window to this URL automatically when the first build completes.
  open: [`http://localhost:${SERVER_PORT}`],
  devMiddleware: {
    // Writes files to dist so we can serve them statically from express.
    writeToDisk: true,
  },
};

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

export const WEBPACK_CONFIG: Configuration = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        // Only compile the browser typescript code.
        include: [path.resolve("src/server/web/")],
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  entry: {
    demo: "./src/server/web/index.tsx",
  },
  output: {
    path: DIST_PATH,
    filename: "static/bundle.js",
  },
  plugins: [new HtmlWebpackPlugin(INDEX_HTML_OPTIONS)],
  devServer: WEBPACK_DEVSERVER_CONFIG,
};

export default WEBPACK_CONFIG;
