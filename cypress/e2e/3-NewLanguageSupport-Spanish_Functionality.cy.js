describe('Language Meta Tag Verification', () => {
    const baseUrl = 'https://docs.cypress.io/guides/overview/why-cypress';
  
    // Open the webpage and clear cookies and local storage before each test
    beforeEach(() => {
      cy.visit(baseUrl);
      cy.clearCookies();
      cy.clearLocalStorage();
    });

       // Handle uncaught exceptions
       Cypress.on('uncaught:exception', (_err, _runnable) => {
        return false;
      });
  
    it('verify the language meta tag', () => {
      // Verify if the meta tag for language exists and confirm it's set to 'en' for English
      // Meta tags provide metadata about the HTML document, not displayed on the page,
      // but help browsers and search engines understand the page content.
      cy.get('meta[name="docsearch:language"]')
        .should('have.attr', 'content', 'en');  // Assert that the 'content' attribute is 'en' (English)
      cy.log('Verified that the language meta tag is set to English.');  // Log message to confirm verification
    });
  
    it('verify the presence of a language switcher', () => {
      // Check for the existence of a language switcher
      cy.get('body').then((body) => {
        if (body.find('[data-test=language-switcher]').length > 0) {
          cy.get('[data-test=language-switcher]').should('be.visible');
        } else {
          // If no switcher is found, assert that the site is only in English
          cy.log('No language switcher found. Site might only be in English.');
        }
      });
    });
  
  
  // Sources and Reasoning:
  // Investigated the page using browser developer tools (F12) to check the HTML structure.
  // Searched for elements related to language settings and found a meta tag specifying the language as 'en' (English).
  // Meta tags are used to indicate language and other metadata, as noted in web standards and best practices.
  // Consulted Cypress documentation and online resources, including articles on testing internationalization (i18n),
  // suggesting checking for language meta tags and language switcher elements to confirm language support.
  
  // Findings:
  // The Cypress documentation site includes a meta tag indicating that the primary language of the site is English ('en').
  // No language switcher element was found on the site, indicating that the site likely does not support multiple languages and is only available in English.
  
  
 
    
      it('should attempt to switch the browser language and reload the page', () => {
        // Simulate changing the browser language to Spanish and reloading the page
        cy.visit(baseUrl, {
          onBeforeLoad(win) {
            Object.defineProperty(win.navigator, 'language', { value: 'es-ES' });
            Object.defineProperty(win.navigator, 'languages', { value: ['es-ES', 'es'] });
          }
        });
        cy.reload();
    
        // Check if the language of the page has changed to Spanish
        cy.get('meta[name="docsearch:language"]').then((meta) => {
          const lang = meta.attr('content');
          if (lang === 'es') {
            cy.log('Verified that the language meta tag is set to Spanish.');
          } else {
            cy.log('The language meta tag has not been changed to Spanish.');
          }
        });
    
      
     
        // Check and veryfing for the presence of the Spanish phrase '¿Por qué Cypress?'
        cy.get('.sidebar_njMd').contains('Why Cypress?').click();
        cy.url().should('include', '/guides/overview/why-cypress');
        cy.get('h1').should('not.contain.text', 'Qué Cypress?')
        cy.get('h2').should('not.contain.text', '¿Por qué Cypress?');
            });
        });
       