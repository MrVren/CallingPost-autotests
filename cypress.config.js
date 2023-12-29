const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '13tz4w',
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
