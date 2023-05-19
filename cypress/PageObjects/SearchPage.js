class SearchPage {
 
    h4Results=".results";
    firstResult=".search-result > p > a";
    lastPageLink=".nav-links :last-child"
 
    getTitleResults(){
        return cy.get(this.h4Results);
    }

    getFirstResult(){
        return cy.get(this.firstResult).first();
    }

    jumpNextPage(){
        return cy.get(this.lastPageLink).click();
    }
}
  
export default new SearchPage();