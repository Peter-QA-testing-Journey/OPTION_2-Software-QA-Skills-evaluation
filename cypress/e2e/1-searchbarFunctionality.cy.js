describe('Cypress Docs New Features', () => {
  const baseUrl = 'https://docs.cypress.io/guides/overview/why-cypress';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('should display the site search bar and return relevant results', () => {
    // Handle the cookies bannerrrr
    cy.get('button', { timeout: 4000 }).contains('Accept All').click(); 

    // Check if the search button is visible and click it
    cy.get('div.searchBox_H2mL button').should('be.visible').click();

    // Select the search input element and type a query
    cy.get('input#docsearch-input') // 
      .type('commands');

    // Assert that the search input contains the typed query
    cy.get('input#docsearch-input')
      .should('have.value', 'commands');

    // Assert that search results appear
    cy.get('.DocSearch-Dropdown') //
      .should('be.visible');

    // Assert that specific search results contain the expected text
    cy.get('.DocSearch-Hit-title') //
      .should('contain.text', 'commands');

       // Clear the search input
    cy.get('input#docsearch-input').clear();

   // Select the search input element and type an invalid keyword
   cy.get('input#docsearch-input') // 
   .type('nonexistentkeyword12345');

 // Assert that the search input contains the typed query
 cy.get('input#docsearch-input')
   .should('have.value', 'nonexistentkeyword12345');

 // Assert that the "No results for" message is displayed
 cy.get('.DocSearch-NoResults') // 
   .should('be.visible')
   .and('contain.text', 'No results for "nonexistentkeyword12345"');

 // Assert that suggested search terms are displayed
 cy.get('.DocSearch-NoResults-Prefill-List') // 
   .should('be.visible')
   .and('contain.text', 'API')
   .and('contain.text', 'Guides')
   .and('contain.text', 'FAQ');
});




  });






