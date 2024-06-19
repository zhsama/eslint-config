# eslint-config

eslint-config

## usage
```shell
pnpm i @taiyuuki/eslint-config -D
```

```ts
// eslint.config.mjs
import eslint_config from '@zhsama/eslint-config'

export default eslint_config({
    indent: 2, // default 4
    ts: true, // default false
    vue: true, // default false
    markdown: false, // default true
    json: false, // default true
    ignores: ['scripts/**'],
    rules: {
        // custom rules
        curly: ['error'],
    },
})
```
