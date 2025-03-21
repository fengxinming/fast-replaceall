import typescript from '@rollup/plugin-typescript';
import camelCase from 'camelcase';
import { build, defineConfig } from 'vite';

import pkg from './package.json';

// https://vitejs.dev/config/
export default ({ command }) => defineConfig({
  build: {
    minify: false,
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: '[name]'
    }
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.build.json'
    }),
    {
      name: 'umd',
      async closeBundle() {
        if (command === 'build') {
          await build({
            configFile: false,
            build: {
              emptyOutDir: false,
              minify: false,
              lib: {
                entry: 'dist/index.mjs',
                name: camelCase(pkg.name),
                formats: ['umd'],
                fileName: '[name]'
              }
            }
          });
        }
      }
    }
  ],
  test: {
    name: pkg.name,
    dir: 'test'
  }
});
