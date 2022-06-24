Feature: Marketplace page

Background: Login
    Given I navigate to "https://dev.examo.quantori.com/"

Scenario: Check available pages
    Given I see Home page
    When  I click on Practice tab
    Then I see page is open

