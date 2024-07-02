declare module 'eslint-plugin-react-hooks' {
    import type { Linter } from 'eslint'

    const eslint_plugin_react: {
        configs: {
            'recommended': Linter.FlatConfig<Linter.RulesRecord>;
        }
        rules: Linter.RulesRecord
        meta: {
            name: string,
            version: string,
        }
    }
    export default eslint_plugin_react
}

declare module 'eslint-plugin-react-refresh' {
    import type { Linter } from 'eslint'

    const eslint_plugin_react: {
        configs: {
            'recommended': Linter.FlatConfig<Linter.RulesRecord>;
        }
        rules: Linter.RulesRecord
        meta: {
            name: string,
            version: string,
        }
    }
    export default eslint_plugin_react
}

declare module 'eslint-plugin-vue' {
    import type { Linter } from 'eslint'

    const eslint_plugin_vue: {
        configs: {
            'flat/recommended': Linter.FlatConfig<Linter.RulesRecord>;
        }
        rules: Linter.RulesRecord
        meta: {
            name: string,
            version: string,
        }
    }
    export default eslint_plugin_vue
}

declare module '@eslint/js' {
    import type { Linter } from 'eslint'

    const eslint: {
        configs: {
            recommended: Linter.FlatConfig<Linter.RulesRecord>;
        }
    }
    export default eslint
}

declare module 'eslint-plugin-markdown' {
    import type { Linter } from 'eslint'

    const eslint_plugin_markdown: {
        configs: {
            recommended: Linter.FlatConfig<Linter.RulesRecord>;
        }
    }
    export default eslint_plugin_markdown
}

declare module 'eslint-plugin-import' {
    import type { Linter } from 'eslint'

    const eslint_plugin_import: {
        configs: {
            recommended: Linter.FlatConfig<Linter.RulesRecord>;
        }
    }
    export default eslint_plugin_import
}

declare module 'eslint-plugin-unicorn' {
    import type { Linter } from 'eslint'

    const eslint_plugin_unicorn: {
        configs: {
            recommended: Linter.FlatConfig<Linter.RulesRecord>;
        }
    }
    export default eslint_plugin_unicorn
}
