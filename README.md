# Cypress E2E Tests

## Test Plan

### Objectives
- Ensure the new site search bar is functional and returns relevant results.
- Verify the functionality of the side menu and its subcategories.
- Confirm the site supports the Spanish language and renders content appropriately.
- (Optional) Validate REST API endpoints for CRUD operations.

### Scope
The scope of this test plan includes:
- Functional testing of the site search bar.
- Functional testing of the side menu and subcategories.
- Verification of Spanish language support.
- REST API testing (optional).

### Test Cases

#### Site Search Bar
- Verify the search bar is visible on the homepage.
- Ensure the search bar returns relevant results for valid queries.
- Validate the search results contain expected keywords.
- Ensure the search bar handles unexpected or invalid keywords.

#### Side Menu
- Verify the side menu is visible on the homepage.
- Ensure the "Dashboard" - existence of categories that expand to show subcategories.
- Confirm navigation to subcategory displays the correct content.

#### Spanish Language Support
- Verify the language meta tag is set to 'en' (English) initially.
- Check for the presence of a language switcher.
- Simulate changing the browser language to Spanish and reload the page.
- Verify the site content is displayed in Spanish when the language is switched in browser.

#### REST API Tests 
- Validate GET, POST, PUT, and DELETE methods for the posts endpoint at `https://jsonplaceholder.typicode.com/posts`.
- Assertions presented as well.

  
## Environment Preparation

### Environment Setup

1. **Tools and Software Used:**
   - **Cypress:** For writing and executing E2E tests.
   - **Visual Studio Code:** As the code editor.
   - **Node.js and npm:** To manage Cypress and other dependencies.

## Writing Tests (links to cy.js files)


#### [searchbarFunctionality.cy.js](https://github.com/Peter-QA-testing-Journey/PANTHEON/blob/main/cypress/e2e/1-searchbarFunctionality.cy.js)
#### [sidebarFunctionality.cy.js](https://github.com/Peter-QA-testing-Journey/PANTHEON/blob/main/cypress/e2e/2-sidebarFunctionality.cy.js)
#### [newLanguageSupport.cy.js](https://github.com/Peter-QA-testing-Journey/PANTHEON/blob/main/cypress/e2e/3-NewLanguageSupport-Spanish_Functionality.cy.js)
#### [REST_API_Tests.cy.js](https://github.com/Peter-QA-testing-Journey/PANTHEON/blob/main/cypress/e2e/4-%20REST_API_Tests.cy.js)

### Summary of Efforts

While the tests run perfectly locally, as confirmed by executing `npx cypress open` and running the tests successfully, there are challenges in running these tests on the CI pipeline. Despite thorough investigations and multiple adjustments, the tests have issues in the CI environment, possibly due to differences in how the environment handles UI rendering and timing. 
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




