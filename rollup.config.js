import {defineConfig} from 'rollup'
import dts from 'rollup-plugin-dts'
import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
import {createRequire} from 'node:module'

const require = createRequire(import.meta.url);
console.log(import.meta.url)
const pkg = require('./package.json');

function resolveExternal() {
  return [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    ...['path', 'url'],
  ]
}

const config = defineConfig([
  {
    input: ['src/index.ts'],
    output: [
      {
        dir: 'dist',
        format: 'esm',
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
      },
    ],
    external: resolveExternal(),
    plugins: [
      ts(),
      commonjs(),
    ],
  },

  // 打包类型声明
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'esm',
    },
    plugins: [
      dts(),
    ],
  },
])

export default config
