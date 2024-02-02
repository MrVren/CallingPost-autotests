/// <reference types="Cypress" />

import selectors from "../../Selectors/Call_InSettings/Call_InSettings";

class Call_In {
  OpenCallIn() {
    cy.get(selectors.profileMenuBtn).eq(14).click();
    cy.get(selectors.profileSettingBtn).eq(14).click();
  }

  EditNumber() {
    cy.get(selectors.editInput).eq(1).clear().type(Cypress.env("username"));
  }

  SaveNumber() {
    cy.get(selectors.saveBtn).click();
  }

  CheckNotification() {
    cy.get(selectors.snackBar).should("have.text", " Successfully updated call in settings ")
  }
}

export default Call_In;
