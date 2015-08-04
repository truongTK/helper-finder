# Description: become a tasker test
# Author: truongtk
Feature: Sign up test
  As a new comer
  I want to be a tasker
  so that register in app

  # The background will be run for every scenario
  Background:
    Given I am a new comer

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @dev
  Scenario:
    When I click become a tasker
    And I click next
    And I fill my fullname "Tran Kim Truong"
    And I fill my phone number "000000000"
    And I fill my email "truongtk@twin.vn"
    And I click next
    And I choose my service
    And Finish
    Then I have an tasker account in database
