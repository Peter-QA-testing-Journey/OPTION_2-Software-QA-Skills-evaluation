# OPTION_2-Software QA – Skills evaluation

## Test Plan

### Objectives
- SEARCH BAR: Verify visibility, functionality, and handling of valid and invalid queries, displaying expected results.
- SIDE MENU: Confirm visibility and proper navigation of categories and subcategories, ensuring correct content and URLs.
- NEW LANGUAGE SUPPORT: Verify language switcher, meta tag, and correct content display for Spanish.
- REST API: Validate CRUD operations for the posts endpoint with assertions.

### Scope
The scope of this test plan includes:
- Functional Testing: Verify the site search bar functionality.
- Functional Testing: Verify the side menu and subcategory navigation.
- Functional Testing: Verify Spanish language support.
- API Testing (Optional): Validate CRUD operations for the posts endpoint.

### Test Cases

#### Site Search Bar
- Verify the search bar is visible on the homepage and can be activated.
- Ensure the search bar returns relevant results for valid queries.
- Validate the search results contain the expected keywords.
- Ensure the search bar handles unexpected or invalid keywords:
- Verify that the "No results for" message is displayed.
- Check that suggested search terms are displayed.

#### Side Menu
- Verify the sidebar menu is visible on the homepage.
- Ensure the sidebar menu contains the "Overview" and "Getting Started" categories.
- Verify "Overview" and "Getting Started" navigation to its subcategories and displays its correct content and URL.

#### Spanish Language Support
- Verify the language meta tag is set to 'en' (English).
- Check for the presence of the language switcher.
- Changing the browser language to Spanish and reload the page.
- Verify for the presence of the spanish phrase.

#### REST API Tests (for fictional List of Slovak Movies)
- Validate GET, POST, PUT, and DELETE methods for the posts endpoint at `https://jsonplaceholder.typicode.com/posts`.
- Assertions presented as well.
- Using Fixture file, Callbacks, "then" 

  
## Environment Preparation

### Environment Setup

1. **Tools and Software Used:**
   - **Cypress:** For writing and executing E2E tests.
   - **Visual Studio Code:** As the code editor.
   - **Node.js and npm:** To manage Cypress and other dependencies.
   - Cypress documentation -https://docs.cypress.io/api/commands/visit#Yields

## Writing Tests (links to cy.js and json files)


#### [searchbarFunctionality.cy.js](https://github.com/Peter-QA-testing-Journey/PANTHEON/blob/main/cypress/e2e/1-searchbarFunctionality.cy.js)
#### [sidebarFunctionality.cy.js](https://github.com/Peter-QA-testing-Journey/PANTHEON/blob/main/cypress/e2e/2-sidebarFunctionality.cy.js)
#### [NewLanguageSupport-Spanish_Functionality.cy.js](https://github.com/Peter-QA-testing-Journey/PANTHEON/blob/main/cypress/e2e/3-NewLanguageSupport-Spanish_Functionality.cy.js)
#### [REST_API_Tests.cy.js](https://github.com/Peter-QA-testing-Journey/PANTHEON/blob/main/cypress/e2e/4-%20REST_API_Tests.cy.js)
#### [Fixture file for REST API Tests](https://github.com/Peter-QA-testing-Journey/PANTHEON/blob/main/cypress/fixtures/movies.json)

## Summary of Efforts

While the tests run perfectly locally, as confirmed by executing     `NPX CYPRESS OPEN`    OR headlessly from console     'NPM RUN TEST'      and running the tests successfully, there are challenges in running these tests on the CI pipeline. Despite thorough investigations and multiple adjustments, the tests have issues in the CI environment, possibly due to differences in how the environment handles UI rendering and timing. 
I have invested significant effort in resolving these issues and will continue to work on ensuring the tests run smoothly in the CI pipeline.

[![Cypress Tests](https://github.com/Peter-QA-testing-Journey/PANTHEON/actions/workflows/main.yml/badge.svg)](https://github.com/Peter-QA-testing-Journey/PANTHEON/actions/workflows/main.yml)

#### [YML - FILE-FOR PIPELINE](https://github.com/Peter-QA-testing-Journey/PANTHEON/blob/main/.github/workflows/main.yml)

## Running Locally
1. **Clone the repository**:
 
   git clone https://github.com/your-repo/cypress-e2e-tests.git
   cd cypress-e2e-tests
   

2. **Open Cypress**:

   npx cypress open

3. **Run the tests**:
   - In the Cypress Test Runner that opens, click on the test file you want to run.
   - Or headlessly with CMD -npm run test (from directory Project)




