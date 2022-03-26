@login
Feature: Stockbit - Home page
	
	@gotoplaystore
  Scenario: User not able to login because the username or password are wrong
    Given User go to the stockbit login page
    And User filling in the incorrect username
    And User filling in the incorrect password
    And User click login
    Then Error message appear