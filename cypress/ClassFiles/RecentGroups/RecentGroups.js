/// <reference types="Cypress" />

import selectors from "../../Selectors/RecentGroups/RecentGroups";

class RecentGroups {
  CreateNewGroup() {
    cy.wait(1000);
    cy.get(selectors.linkBtn).eq(6).click();
    cy.wait(1000);
    cy.get(selectors.groupInput).clear().type(`Tester${Math.ceil(Math.random() * 999).toString()}`);
    cy.wait(1000);
    cy.get(selectors.selectInput).click();
    cy.wait(1000);
    cy.get(selectors.selectOption).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.saveGroup).click();
    cy.wait(10000);
    cy.get(selectors.mobileToolbarBtn).click({force: true});
    cy.wait(3000);
    cy.get(selectors.homeBtn).eq(0).click({force: true});
  }

  SeeAllGroups() {
    cy.wait(1000);
    cy.get(selectors.linkBtn).eq(5).click();
    cy.wait(10000);
    cy.get(selectors.mobileToolbarBtn).click({force: true});
    cy.wait(3000);
    cy.get(selectors.homeBtn).eq(0).click({force: true});
  }

  OpenGroup() {
    cy.wait(1000);
    cy.get(selectors.OpenGroup).click();
  }
}

export default RecentGroups;