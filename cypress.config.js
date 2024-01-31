const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '13tz4w',
  video: false,
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    //baseUrl: 'https://test.callingpost.com',
    baseURL: 'https://apps.callingpost.com',
    viewportHeight: 1080,
    viewportWidth: 1920,
    taskTimeout: 5000,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
});
