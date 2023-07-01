import esbuild from "esbuild";
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

const esmCtx = await esbuild.context({
  ...shared,
  format: "esm",
  outfile: "./lib/index.esm.js",
  target: ["es2020", "node18"],
});

let esm = esmCtx.rebuild();
if (args.includes("--watch")) {
  esm = esm.then(() => esmCtx.watch());
}

const cjsCtx = await esbuild.context({
  ...shared,
  format: "cjs",
  outfile: "./lib/index.cjs.js",
  target: ["es2020", "node18"],
});

const cjs = cjsCtx.rebuild();

await Promise.all([buildTsc(import.meta.url), esm, cjs]);

await esmCtx.dispose();
await cjsCtx.dispose();