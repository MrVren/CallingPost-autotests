/// <reference types="Cypress" />

import selectors from "../../Selectors/StatusAndResults/StatusAndResults";

class StatusAndResult {
  OpenStatusAndResult() {
    cy.wait(4000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000);
    cy.get(selectors.statusAndResultBtn).eq(3).click({ force: true });
  }

  SearchMessage() {
    cy.wait(1000);
    cy.get(selectors.searchIcon).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.searchInput).clear().type("Message{enter}");
  }

  FilterMessage() {
    cy.wait(1000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000);
    cy.get(selectors.statusAndResultBtn).eq(3).click({ force: true });
    cy.get(selectors.searchIcon).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.filterRadio).eq(1).click({ force: true });
    cy.wait(1000);
    cy.get(selectors.applyFilter).click();
  }

  RefreshMessage() {
    cy.wait(1000);
    cy.get(selectors.searchIcon).eq(2).click();
  }
}

export default StatusAndResult;
