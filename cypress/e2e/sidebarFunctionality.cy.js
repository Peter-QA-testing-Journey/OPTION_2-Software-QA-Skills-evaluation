describe('Cypress Docs Sidebar Functionality', () => {
    const baseUrl = 'https://docs.cypress.io/guides/overview/why-cypress';
  
    beforeEach(() => {
      cy.visit(baseUrl);
      cy.clearCookies();
      cy.clearLocalStorage();
    });
  
    it('should display the sidebar and expand subcategories', () => {
      // Handle the cookies banner
      cy.get('button').contains('Accept All').click({ force: true });
  
      // Check if the sidebar is visible
    cy.get('.sidebar_njMd').should('be.visible');
  
      
      
    
        
    
    
        // Click on the "Overview" category to expand subcategories
        cy.get('.sidebar_njMd').contains('Overview').click();
    
        // Assert that the subcategories are visible
        cy.get('.sidebar_njMd').contains('Why Cypress?').should('be.visible').click();

    // Click on the "Getting Started" category to expand subcategories
    cy.get('.sidebar_njMd').contains('Getting Started').click();

    // Assert that the subcategories are visible
    cy.get('.sidebar_njMd').contains('Installing Cypress').should('be.visible');
    cy.get('.sidebar_njMd').contains('Opening the App').should('be.visible');
    
 
    
        // Optionally, navigate to a subcategory and verify the page content
        cy.get('.sidebar_njMd').contains('Why Cypress?').click();
        cy.url().should('include', '/guides/overview/why-cypress');
        cy.get('h1').should('contain.text', 'Why Cypress?');
      });
    });
  
