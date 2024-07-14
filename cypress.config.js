const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://docs.cypress.io',
    screenshotOnRunFailure: false,
    video: false,
    trashAssetsBeforeRuns: false,
    supportFile: 'cypress/support/e2e.js',
  },
});
