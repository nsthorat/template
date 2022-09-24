import * as React from "react";
import { createRoot } from "react-dom/client";

async function main() {
  console.log("hello world");
}

function App(): JSX.Element {
  return <div>Hello world from react!</div>;
}

window.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root") as HTMLDivElement);
  root.render(<App />);

  main();
});
