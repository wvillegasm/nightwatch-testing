const {defineSupportCode} = require('cucumber')
const {client} = require('nightwatch-cucumber')

defineSupportCode(function ({Given, Then, When}) {
  Given(/^the Google home page$/, function (callback) {
    client
      .url('https://google.com')
      .waitForElementVisible('body', 1000)

    callback(null, 'pending')
  })
  When(/^user get the body content$/, function (callback) {
    callback(null, 'pending')
  })
  Then(/^The body tag will contain text "([^"]*)"$/, function (arg1, callback) {
    client.assert.containText('body', 'About Store')
    callback(null, 'pending')
  })
})
