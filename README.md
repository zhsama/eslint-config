# eslint-config

eslint-config

## usage
```shell
pnpm i @zhsama/eslint-config -D
```

```ts
// eslint.config.js
import eslint_config from '@zhsama/eslint-config'

export default eslint_config({
    indent: 4, // default 2
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
