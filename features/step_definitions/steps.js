'use strict'

const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, When, Then, After, Before}) => {
  Before(function (scenario) {
    return client.init()
  })
  After(function (scenario) {
    return client.end()
  })

  Given(/^a initial case assignment page$/, function (cb) {
    client
      .url('https://google.com')
      .waitForElementVisible('body', 1000)

    cb(null, 'pending')
  })
  When(/^the system retrieve the cases$/, function (cb) {
    cb(null, 'pending')
  })
  Then(/^the total of the rows in the screen should be three$/, function (cb) {
    client.assert.containsText('body', 'About Store')
    cb(null, 'pending')
  })
})
