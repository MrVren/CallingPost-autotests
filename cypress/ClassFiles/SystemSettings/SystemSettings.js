/// <reference types="Cypress" />

import selectors from "../../Selectors/SystemSettings/SystemSettings";

class Call_In {
  OpenSystemSettings() {
    cy.wait(5000);
    cy.get(selectors.profileMenuBtn).eq(14).click();
    cy.wait(1000);
    cy.get(selectors.profileSettingBtn).eq(15).click();
    cy.wait(5000);
  }

  EditCommunicationSettings() {
    cy.wait(1000);
    cy.get(selectors.expandHeader).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.selectInput).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.selectOption).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.selectInput).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.selectOption).eq(0).click();
    cy.wait(3000);
    cy.get(selectors.checkbox).eq(0).check({force:true});
    cy.wait(1000);
  }

  EditContactSettings() {
    cy.wait(1000);
    cy.get(selectors.expandHeader).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.checkbox).eq(1).check({force:true});
    cy.wait(1000);
    cy.get(selectors.checkbox).eq(2).check({force:true});
    cy.wait(1000);
  }

  EditExtraSettings() {
    cy.wait(1000);
    cy.get(selectors.expandHeader).eq(2).click();
    cy.wait(1000);
    cy.get(selectors.checkbox).eq(3).check({force:true});
    cy.wait(1000);
    cy.get(selectors.checkbox).eq(4).check({force:true});
    cy.wait(1000);
    cy.get(selectors.checkbox).eq(5).check({force:true});
    cy.wait(1000);
  }
}

export default Call_In;
