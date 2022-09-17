import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { apiExtractor } from 'rollup-plugin-api-extractor';
import del from 'rollup-plugin-delete';

const inputFile = 'src/index.ts';
const outputName = 'index';
const externalLibs = ['puppeteer-core', 'serve-static', 'http'];

const commonPlugins = [
    commonjs(),
    typescript({
        tsconfig: './tsconfig.json',
    }),
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
];

export default configs;