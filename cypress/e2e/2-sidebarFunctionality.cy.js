describe('Cypress Docs Sidebar Functionality', () => {
    const baseUrl = 'https://docs.cypress.io/guides/overview/why-cypress';
  
    beforeEach(() => {
      cy.visit(baseUrl);
      cy.clearCookies();
      cy.clearLocalStorage();
    });
  
    it('display the sidebar and expand subcategories', () => {
      // Handle the cookies banner
      cy.get('button').contains('Accept All').click({ force: true });
  
      // Verify the "Dashboard" (side menu) is present in the side menu
    cy.get('.sidebar_njMd').should('be.visible');
  
      // Click on the "Overview" category to expand subcategories
        cy.get('.sidebar_njMd').contains('Overview').click();
    
        // Assert that the subcategories are visible
        cy.get('.sidebar_njMd').contains('Why Cypress?').should('be.visible').click();

          // Navigate to subcategory "Why cypress" and verify the page content
          cy.get('.sidebar_njMd').contains('Why Cypress?').click();
          cy.url().should('include', '/guides/overview/why-cypress');
          cy.get('h1').should('contain.text', 'Why Cypress?');

    // Click on the "Getting Started" category to expand subcategories
    cy.get('.sidebar_njMd').contains('Getting Started').click();

    // Assert that the subcategories are visible
    cy.get('.sidebar_njMd').contains('Installing Cypress').should('be.visible').click();


      // Navigate to a subcategory Installing Cypress and verify the page content
    cy.url().should('include', '/guides/getting-started/installing-cypress');
    cy.get('h1').should('contain.text', 'Installing Cypress');


    cy.get('.sidebar_njMd').contains('Opening the App').should('be.visible');
 
 
    
      // Navigate to a subcategory "Opening the App" and verify the page content
        cy.get('.sidebar_njMd').contains('Opening the App').click();
        cy.url().should('include', '/guides/getting-started/opening-the-app');
        cy.get('h1').should('contain.text', 'Opening the App');
      });
    
  
    });