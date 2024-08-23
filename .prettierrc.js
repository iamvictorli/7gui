// @ts-check

/** @type {import("prettier").Config} */
export default {
  semi: false,
  arrowParens: 'avoid',
  bracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',

  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '<BUILTIN_MODULES>', // Node.js built-in modules
    '',
    '<THIRD_PARTY_MODULES>', // Imports not matched by other special words or groups.
    '',
    '^[.]', // relative imports
  ],
}
