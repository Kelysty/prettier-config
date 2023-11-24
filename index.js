module.exports = {
  endOfLine: 'lf',
  bracketSpacing: false,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'all',
  arrowParens: 'always',
  singleAttributePerLine: true,
  requirePragma: false,
  insertPragma: false,
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: ['*.md', '*.json', '*.yaml', '*.yml'],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
