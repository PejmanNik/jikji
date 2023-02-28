import {build} from 'esbuild';
import {buildTsc} from '@jikji/shared/build-tsc.mjs';
import {style} from '@hyrious/esbuild-plugin-style';

const args = process.argv;

export const shared = {
  bundle: true,
  entryPoints: ['src/index.ts'],
  external: ['react', 'react-dom', 'recoil', 'react/jsx-runtime'],
  logLevel: 'info',
  minify: true,
  sourcemap: args.includes('--sm'),
  plugins: [style({minify: true})],
};

const esm = build({
  ...shared,
  format: 'esm',
  outfile: './lib/index.esm.js',
  target: ['es2020', 'node18'],
});

const cjs = build({
  ...shared,
  format: 'cjs',
  outfile: './lib/index.cjs.js',
  target: ['es2020', 'node18'],
});

await Promise.all([buildTsc(import.meta.url), esm, cjs]);
