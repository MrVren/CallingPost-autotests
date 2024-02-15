const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 896,
    viewportWidth: 414,
    taskTimeout: 5000,
    experimentalRunAllSpecs: true,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config);
    },
  },
});
