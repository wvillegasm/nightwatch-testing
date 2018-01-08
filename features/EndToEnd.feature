Feature: End to end tests

  Scenario: Check the list of the cases
    Given a initial case assignment page
    When the system retrieve the cases
    Then the total of the rows in the screen should be three
