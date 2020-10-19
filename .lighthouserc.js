module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run serve',
      startServerReadyPattern:
        'ready - started server on http://localhost:3000',
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/blog',
        'http://localhost:3000/blog/fetch-with-timeout',
        'http://localhost:3000/projects',
      ],
      upload: {
        target: 'temporary-public-storage',
      },
    },
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        // I don't have control over these (Gatsby does):
        'uses-rel-preconnect': 'off',
        'unused-javascript': 'off',
        // 404 page (and only 404 page) causes these to error:
        'tap-targets': 'warn',
        'errors-in-console': 'warn',
      },
    },
  },
}
