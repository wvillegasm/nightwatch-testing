Feature: Google Home Page
  To check that the project configuration run properly
  As a tester, I want to validate that the project is able to execute End to End test

  Scenario: Verify Google Home page
    Given the Google home page
    When user get the body content
    Then The body tag will contain text "About Store"
