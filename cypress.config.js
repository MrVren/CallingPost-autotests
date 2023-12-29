const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '13tz4w',
  video: false,
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'test.callingpost.com',
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
