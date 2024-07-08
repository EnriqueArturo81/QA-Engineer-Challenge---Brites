Feature: Validate the number of tentacles input field

  Scenario: Valid Minimum Boundary Value
    Given the user is on the form page
    When the user enters "10" in the "tentacles" input field
    And the user clicks the "Send" button
    Then a "Success" message should be displayed

  Scenario: Valid Maximum Boundary Value
    Given the user is on the form page
    When the user enters "100" in the "tentacles" input field
    And the user clicks the "Send" button
    Then a "Success" message should be displayed

  Scenario: Below Minimum Boundary Value
    Given the user is on the form page
    When the user enters "9" in the "tentacles" input field
    And the user clicks the "Send" button
    Then an "Error" message should be displayed

  Scenario: Above Maximum Boundary Value
    Given the user is on the form page
    When the user enters "101" in the "tentacles" input field
    And the user clicks the "Send" button
    Then an "Error" message should be displayed

  Scenario: Valid Middle Value
    Given the user is on the form page
    When the user enters "55" in the "tentacles" input field
    And the user clicks the "Send" button
    Then a "Success" message should be displayed

  Scenario: Non-Numeric Input
    Given the user is on the form page
    When the user enters "abc" in the "tentacles" input field
    And the user clicks the "Send" button
    Then an "Error" message should be displayed

  Scenario: Empty Input
    Given the user is on the form page
    When the user leaves the "tentacles" input field empty
    And the user clicks the "Send" button
    Then an "Error" message should be displayed

  Scenario: Decimal Input Within Range
    Given the user is on the form page
    When the user enters "50.5" in the "tentacles" input field
    And the user clicks the "Send" button
    Then an "Error" message should be displayed

  Scenario: Leading and Trailing Spaces
    Given the user is on the form page
    When the user enters " 50 " in the "tentacles" input field
    And the user clicks the "Send" button
    Then a "Success" message should be displayed

  Scenario: Special Characters
    Given the user is on the form page
    When the user enters "!@#$" in the "tentacles" input field
    And the user clicks the "Send" button
    Then an "Error" message should be displayed

  Scenario: Negative Value
    Given the user is on the form page
    When the user enters "-1" in the "tentacles" input field
    And the user clicks the "Send" button
    Then an "Error" message should be displayed

  Scenario: Large Number Exceeding Input Type Limits
    Given the user is on the form page
    When the user enters "9999999999" in the "tentacles" input field
    And the user clicks the "Send" button
    Then an "Error" message should be displayed

  Scenario: JavaScript Injection
    Given the user is on the form page
    When the user enters "<script>alert('test')</script>" in the "tentacles" input field
    And the user clicks the "Send" button
    Then an "Error" message should be displayed