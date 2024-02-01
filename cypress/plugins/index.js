const TestRailReporter = require('cypress-testrail'); 

const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve('./cypress', 'config', `cypress.${file}.json`)

    return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
    new TestRailReporter(on, config).register(); 
    return config;
}

module.exports = (on, config) => {
    // accept a configFile value or use test by default
    const file = config.env.configFile || 'test'

    return getConfigurationByFile(file)
}