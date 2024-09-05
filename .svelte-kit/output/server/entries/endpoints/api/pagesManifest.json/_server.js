import fs from "fs-extra";
import path from "path";
import preprocessor from "@evidence-dev/preprocess";
import { e as error } from "../../../../chunks/index.js";
const pages = /* @__PURE__ */ Object.assign({ "/src/pages/+page.md": () => import("../../../pages/_page.md.js"), "/src/pages/about/+page.md": () => import("../../../pages/about/_page.md.js"), "/src/pages/about/how_it_works/+page.md": () => import("../../../pages/about/how_it_works/_page.md.js"), "/src/pages/nba/+page.md": () => import("../../../pages/nba/_page.md.js"), "/src/pages/nba/Lakers_vs_Clippers/+page.md": () => import("../../../pages/nba/Lakers_vs_Clippers/_page.md.js"), "/src/pages/nba/advanced/+page.md": () => import("../../../pages/nba/advanced/_page.md.js"), "/src/pages/nba/historical_matchups/+page.md": () => import("../../../pages/nba/historical_matchups/_page.md.js"), "/src/pages/nba/in-season tournament/+page.md": () => import("../../../pages/nba/in-season tournament/_page.md.js"), "/src/pages/nba/predictions/+page.md": () => import("../../../pages/nba/predictions/_page.md.js"), "/src/pages/nba/teams/+page.md": () => import("../../../pages/nba/teams/_page.md.js"), "/src/pages/nba/teams/[nba_teams]/+page.md": () => import("../../../pages/nba/teams/_nba_teams_/_page.md.js"), "/src/pages/ncaaf/+page.md": () => import("../../../pages/ncaaf/_page.md.js"), "/src/pages/ncaaf/conferences/+page.md": () => import("../../../pages/ncaaf/conferences/_page.md.js"), "/src/pages/ncaaf/conferences/[ncaaf_conferences]/+page.md": () => import("../../../pages/ncaaf/conferences/_ncaaf_conferences_/_page.md.js"), "/src/pages/ncaaf/predictions/+page.md": () => import("../../../pages/ncaaf/predictions/_page.md.js"), "/src/pages/ncaaf/teams/+page.md": () => import("../../../pages/ncaaf/teams/_page.md.js"), "/src/pages/ncaaf/teams/[ncaaf_teams]/+page.md": () => import("../../../pages/ncaaf/teams/_ncaaf_teams_/_page.md.js"), "/src/pages/nfl/+page.md": () => import("../../../pages/nfl/_page.md.js"), "/src/pages/nfl/predictions/+page.md": () => import("../../../pages/nfl/predictions/_page.md.js"), "/src/pages/nfl/teams/+page.md": () => import("../../../pages/nfl/teams/_page.md.js"), "/src/pages/nfl/teams/[nfl_teams]/+page.md": () => import("../../../pages/nfl/teams/_nfl_teams_/_page.md.js"), "/src/pages/test/+page.md": () => import("../../../pages/test/_page.md.js") });
const pagePaths = Object.keys(pages).map((path2) => path2.replace("/src/pages/", ""));
const prerender = true;
function convertChildrenToArray(node) {
  if (node.children) {
    node.children = Object.keys(node.children).map(function(key) {
      return node.children[key];
    });
    node.children.forEach(function(child) {
      convertChildrenToArray(child);
    });
  }
}
function deleteEmptyNodes(node) {
  if (node.children) {
    Object.keys(node.children).forEach(function(key) {
      deleteEmptyNodes(node.children[key]);
      if (!node.children[key].label && !node.children[key].href) {
        delete node.children[key];
      }
    });
  }
}
async function GET() {
  try {
    const fileTree = {
      label: "Home",
      href: "/",
      children: {},
      isTemplated: false
    };
    pagePaths.forEach(function(pagePath) {
      pagePath.split("/").reduce(function(r, e) {
        if (e === "+page.md") {
          const href = pagePath.includes("[") ? void 0 : encodeURI("/" + pagePath.replace(/\/?\+page.md$/, ""));
          const absolutePath = path.join(process.cwd(), "src", "pages", pagePath);
          const pageContent = fs.readFileSync(absolutePath, "utf-8");
          const frontMatter = preprocessor.parseFrontmatter(pageContent);
          return r["href"] = href, r["frontMatter"] = frontMatter;
        } else {
          const label = e.includes("[") ? void 0 : e.replace(/_/g, " ").replace(/-/g, " ");
          r.isTemplated = e.includes("[");
          return r?.children[e] || (r.children[e] = {
            label,
            children: {},
            href: void 0,
            isTemplated: false
          });
        }
      }, fileTree);
    });
    deleteEmptyNodes(fileTree);
    convertChildrenToArray(fileTree);
    return new Response(JSON.stringify(fileTree));
  } catch {
    throw error(500, "Failed to build pages manifest.");
  }
}
export {
  GET,
  prerender
};
