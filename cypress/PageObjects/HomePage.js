class HomePage {

    btnSearch="#open-global-search";
    inputSearch="#site-search-keyword";
    btnSubmit=".gsearch.icon.icon-search";
 
    search(term){
        cy.get(this.btnSearch).click();
        cy.get(this.inputSearch).type(term); 
        cy.get(this.btnSubmit).click();
    }
}
  
export default new HomePage();