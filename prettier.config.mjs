// @ts-check

/** @type {import("prettier").Config} */
const prettierConfig = {
    plugins: ['prettier-plugin-organize-imports'],

    /* prettier */
    printWidth: 128,
    tabWidth: 4,
    useTabs: false,
    semi: false,
    singleQuote: true,
    quoteProps: 'consistent',
    jsxSingleQuote: false,
    trailingComma: 'all',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',
    rangeStart: 0,
    rangeEnd: Infinity,
    requirePragma: false,
    insertPragma: false,
    proseWrap: 'preserve',
    htmlWhitespaceSensitivity: 'css',
    vueIndentScriptAndStyle: true,
    endOfLine: 'lf',
    embeddedLanguageFormatting: 'auto',
    singleAttributePerLine: false,
}

export default prettierConfig
