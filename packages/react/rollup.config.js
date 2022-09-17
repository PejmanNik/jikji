import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { apiExtractor } from 'rollup-plugin-api-extractor';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';

const inputFile = 'src/index.ts';
const outputName = 'index';
const externalLibs = ['react', 'react-dom', 'recoil', 'react/jsx-runtime'];

const commonPlugins = [
  commonjs(),
  typescript({
    tsconfig: './tsconfig.json',
  }),
  postcss(),
  terser(),
];

const configs = [
  // CommonJS
  {
    input: inputFile,
    output: {
      file: `lib/cjs/${outputName}.js`,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    external: externalLibs,
    plugins: commonPlugins,
  },

  // ES
  {
    input: inputFile,
    output: {
      file: `lib/es/${outputName}.js`,
      format: 'es',
      sourcemap: true,
      exports: 'named',
    },
    external: externalLibs,
    plugins: [
      ...commonPlugins,
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: 'dist',
        noEmitOnError: true,
      }),
      apiExtractor({
        cleanUpRollup: false,
        configFile: './api-extractor.jsonc',
      }),
      del({ targets: './lib/es/dist', hook: 'writeBundle' }),
    ],
  },

  // ES Module
  {
    input: inputFile,
    output: {
      file: `lib/es/${outputName}.mjs`,
      format: 'es',
      sourcemap: true,
      exports: 'named',
    },
    external: externalLibs,
    plugins: commonPlugins,
  },

  // UMD Development
  {
    input: inputFile,
    output: {
      file: `lib/umd/${outputName}.js`,
      format: 'umd',
      name: 'jikji-react',
      sourcemap: true,
      exports: 'named',
      globals: {
        recoil: 'Recoil',
        react: 'React',
        'react-dom': 'ReactDOM',
        'react/jsx-runtime': 'jsxRuntime',
      },
    },
    external: externalLibs,
    plugins: commonPlugins,
  },

  // UMD Production
  {
    input: inputFile,
    output: {
      file: `lib/umd/${outputName}.min.js`,
      format: 'umd',
      name: 'jikji-react',
      exports: 'named',
      sourcemap: true,
      globals: {
        recoil: 'Recoil',
        react: 'React',
        'react-dom': 'ReactDOM',
        'react/jsx-runtime': 'jsxRuntime',
      },
    },
    external: externalLibs,
    plugins: commonPlugins,
  },
];

export default configs;
