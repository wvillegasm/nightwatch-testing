'use strict'

const chromeDriver = require('chromedriver')
const geckoDriver = require('geckodriver')
const seleniumServer = require('selenium-server')

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'timeout.js',
    '--require', 'features/step_definitions',
    '--format', 'json:reports/cucumber.json',
    'features'
  ]
})

module.exports = exports = (function (settings) {
  settings.selenium.cli_args['webdriver.chrome.driver'] = chromeDriver.path
  settings.selenium.cli_args['webdriver.gecko.driver'] = geckoDriver.path
  settings.selenium['server_path'] = seleniumServer.path

  return settings
})(require('./nightwatch.json'))
