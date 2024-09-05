import fs from "fs/promises";
import path from "path";
import preprocessor from "@evidence-dev/preprocess";
import { j as json } from "../../../../../chunks/index.js";
const prerender = false;
async function GET({ params: { route } }) {
  let routesDir;
  if ((await fs.readdir(process.cwd())).includes("src")) {
    routesDir = path.join("src", "pages");
  } else {
    routesDir = path.join(".evidence", "template", "src", "pages");
  }
  const routePath = path.join(process.cwd(), routesDir, route, "+page.md");
  const content = await fs.readFile(routePath, "utf8");
  const partialInjectedContent = preprocessor.injectPartials(content);
  const queries = preprocessor.extractQueries(partialInjectedContent);
  return json({ queries });
}
export {
  GET,
  prerender
};
