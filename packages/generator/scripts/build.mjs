import { build } from "esbuild";
import { buildTsc } from "@jikji/shared/build-tsc.mjs";

const args = process.argv;

const entryFile = "src/index.ts";
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  external: ["puppeteer-core", "serve-static", "http"],
  logLevel: "info",
  minify: true,
  sourcemap: args.includes("--sm"),
  platform: "node",
};

const esm = build({
  ...shared,
  format: "esm",
  outfile: "./lib/index.esm.js",
  target: ["es2020", "node18"],
  watch: args.includes("--watch"),
});

const cjs = build({
  ...shared,
  format: "cjs",
  outfile: "./lib/index.cjs.js",
  target: ["es2020", "node18"],
});

await Promise.all([buildTsc(import.meta.url), esm, cjs]);
