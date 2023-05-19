import HomePage from "../PageObjects/HomePage"
import SearchPage from "../PageObjects/SearchPage"

describe('Search Suite', () => {
  beforeEach('Navigate to page', ()=>{
    cy.visit("https://global.hitachi-solutions.com/");
  });

  it('User can successfully navigate to the site', () => {
    cy.title().should('eq', 'Home – Hitachi Solutions')
  })

  it('User can successfully search for term and click on results', () => { 
    cy.fixture('home-data').then( (data)=>{
      HomePage.search(data.validResults.term);
      cy.url().should('include', data.validResults.term);
      // Note, now we have changed to other page, we use other POM 
      SearchPage.getTitleResults().contains(data.validResults.term);
      SearchPage.getFirstResult().invoke('attr', 'href').then(href => { 
        SearchPage.getFirstResult().click();
        cy.url().should('include', href);
        // negative assert
        cy.url().should('not.equal', 'https://global.hitachi-solutions.com/');
      });
    });
  });

  // extra test
  it('User can search for term but no results are shown', () => { 
    cy.fixture('home-data').then((data)=>{
      HomePage.search(data.invalidResults.term);
      SearchPage.getTitleResults().contains("Sorry, your search didn't return any results.");
    });
  });

  it('User can navigate to the next page', () => { 
    cy.fixture('home-data').then((data)=>{
      HomePage.search(data.validResults.term);
      SearchPage.jumpNextPage();
    });
  });
 
});