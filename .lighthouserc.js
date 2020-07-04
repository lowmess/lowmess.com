module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        // I don't have control over these (Gatsby does):
        'uses-rel-preconnect': 'off',
        'unused-javascript': 'off',
        // 404 page (and only 404 page) causes these to error:
        'tap-targets': 'warn',
        'errors-in-console': 'warn',
        // Superflous text like "Introduction" on the homepage has a really
        // low color contrast, but is also not essential text. I do still
        // want warnings for other elements, though.
        'color-contrast': 'warn',
      },
    },
  },
}
