module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        // Superflous text like "Introduction" on the homepage has a really
        // low color contrast, but is also not essential text.
        'color-contrast': 'warn',
      },
    },
  },
}
