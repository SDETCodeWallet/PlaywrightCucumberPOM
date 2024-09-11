@UITest
Feature: Validate Application Page

Background: Setup Browser
    Given I launch the application

    Scenario: This is my sample scenario
        When I click on Get Started Link 
        Then I verify Installation page is displayed