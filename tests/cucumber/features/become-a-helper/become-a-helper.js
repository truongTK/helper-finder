/**
*@Description: This file define sign up steps.
*@Author: Toanpp
*/
(function() {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function() {
    var url = require('url');
    this.Given(/^I am a new comer$/, function(callback) {
      this.client
        .url(process.env.ROOT_URL)
        .waitForExist('body *')
        .waitForVisible('body *')
        .call(callback);
    });

    this.When(/^I click become a tasker$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.When(/^I click next$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.When(/^I fill my fullname "([^"]*)"$/, function(arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.When(/^I fill my phone number "([^"]*)"$/, function(arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.When(/^I fill my email "([^"]*)"$/, function(arg1, callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.When(/^I choose my service$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.When(/^Finish$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

    this.Then(/^I have an tasker account in database$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      callback.pending();
    });

  }
})();
