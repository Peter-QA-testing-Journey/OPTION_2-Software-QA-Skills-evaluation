# Cypress E2E Tests

## CI Pipeline
You can view the pipeline configuration [here](https://github.com/your-repo/cypress-e2e-tests/actions). The tests run perfectly locally but encounter rendering or timing issues in the CI pipeline. Despite thorough investigations and multiple adjustments, these issues persist as part of my self-learning process in setting up and running CI pipelines with GitHub Actions.

## Running Locally
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/cypress-e2e-tests.git
   cd cypress-e2e-tests
   ```
2. **Install dependencies**:
   ```bash
   npm ci
   ```
3. **Open Cypress**:
   ```bash
   npx cypress open
   ```
4. **Run the tests**:
   - In the Cypress Test Runner that opens, click on the test file you want to run.

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
- Ensure the "Dashboard" category expands to show subcategories.
- Confirm navigation to each subcategory displays the correct content.
- Validate the URL changes appropriately for each subcategory.

#### Spanish Language Support
- Verify the language meta tag is set to 'en' (English) initially.
- Check for the presence of a language switcher.
- Simulate changing the browser language to Spanish and reload the page.
- Ensure the site content is displayed in Spanish when the language is switched.

#### REST API Tests (Optional)
- Validate GET, POST, PUT, and DELETE methods for the posts endpoint at `https://jsonplaceholder.typicode.com/posts`.

## Environment Preparation

### Environment Setup

1. **Tools and Software Used:**
   - **Cypress:** For writing and executing E2E tests.
   - **Visual Studio Code:** As the code editor.
   - **Node.js and npm:** To manage Cypress and other dependencies.

2. **Installation Steps:**
   - Install Node.js and npm from [nodejs.org](https://nodejs.org/).
   - Initialize a new project directory:
     ```bash
     mkdir cypress-e2e-tests
     cd cypress-e2e-tests
     npm init -y
     ```
   - Install Cypress:
     ```bash
     npm install cypress --save-dev
     ```
   - Open Cypress:
     ```bash
     npx cypress open
     ```

## Writing Tests

### Example Cypress Tests

#### [searchbarFunctionality.cy.js](https://github.com/your-repo/cypress-e2e-tests/blob/main/cypress/e2e/searchbarFunctionality.cy.js)
#### [sidebarFunctionality.cy.js](https://github.com/your-repo/cypress-e2e-tests/blob/main/cypress/e2e/sidebarFunctionality.cy.js)
#### [newLanguageSupport.cy.js](https://github.com/your-repo/cypress-e2e-tests/blob/main/cypress/e2e/newLanguageSupport.cy.js)
#### [REST_API_Tests.cy.js](https://github.com/your-repo/cypress-e2e-tests/blob/main/cypress/e2e/REST_API_Tests.cy.js)

### Summary of Efforts

While the tests run perfectly locally, as confirmed by executing `npx cypress open` and running the tests successfully, there are challenges in running these tests on the CI pipeline. Despite thorough investigations and multiple adjustments, the tests have issues in the CI environment, possibly due to differences in how the environment handles UI rendering and timing. 
I have invested significant effort in resolving these issues and will continue to work on ensuring the tests run smoothly in the CI pipeline.

The project structure, as shown in the [GitHub repository](https://github.com/your-repo/cypress-e2e-tests), includes well-organized test files and configurations. The tests are comprehensive and cover the necessary functionalities. I remain committed to resolving the CI issues and ensuring a seamless integration.

