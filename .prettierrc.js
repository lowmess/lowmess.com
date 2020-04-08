module.exports = {
  ...require('prettier-config-lowmess'),
  overrides: [
    {
      files: '*.mdx',
      options: {
        printWidth: 75,
      },
    },
  ],
}
