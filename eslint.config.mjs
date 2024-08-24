// @ts-check
import pluginJs from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('typescript-eslint').Config} */
const eslintConfig = [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: globals.node } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
]

export default eslintConfig
