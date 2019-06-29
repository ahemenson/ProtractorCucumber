Feature: Fill the name
    Scenario: Fill the name to see with hello
        Given The user go to "http://www.angularjs.org"
        When The user adds "Tulio" in the name field
        Then The user should see Hello with the username