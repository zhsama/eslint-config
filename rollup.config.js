import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import commonjs from '@rollup/plugin-commonjs'
import ts from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

const config = defineConfig([
  {
    input: ['src/index.ts'],
    output: [
      {
        dir: 'dist',
        format: 'esm',
      },
      {
        // dir: 'dist/cjs',
        file: 'dist/index.cjs',
        format: 'cjs',
      },
    ],
    plugins: [
      json(),
      resolve(),
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
