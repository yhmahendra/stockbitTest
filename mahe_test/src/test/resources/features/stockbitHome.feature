@homepage
Feature: Stockbit - Home page
	
	@gotoplaystore
  Scenario: User want to go to the stockbit PlayStore
    Given User go to the stockbit home page
    And User click the PlayStore button
   
   @gotoregister 
   Scenario: User able to go to the registration page
    Given User go to the stockbit home page
    And User click the sign up on the nav bar
    Then User validate the register page 