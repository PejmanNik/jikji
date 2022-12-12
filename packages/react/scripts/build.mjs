import {build} from 'esbuild';
import {buildTsc} from '@jikji/scripts/build-tsc.mjs';

const args = process.argv;

const entryFile = 'src/index.ts';
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  external: ['react', 'react-dom', 'recoil', 'react/jsx-runtime'],
  logLevel: 'info',
  minify: true,
  sourcemap: args.includes('--sm'),
};

const esm = build({
  ...shared,
  format: 'esm',
  outfile: './lib/index.esm.js',
  target: ['es2020', 'node18'],
  watch: args.includes('--watch'),
});

const cjs = build({
  ...shared,
  format: 'cjs',
  outfile: './lib/index.cjs.js',
  target: ['es2020', 'node18'],
});

await Promise.all([buildTsc(import.meta.url), esm, cjs]);
