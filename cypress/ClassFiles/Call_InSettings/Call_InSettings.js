/// <reference types="Cypress" />

import selectors from "../../Selectors/Call_InSettings/Call_InSettings";

class Call_In {
  OpenCallIn() {
    cy.get(selectors.mobileToolbarBtn).click({ force: true });
    cy.wait(3000);
    cy.get(selectors.profileMenuBtn).eq(8).click({force: true});
  }

  EditNumber() {
    cy.get(selectors.editInput).eq(1).clear().type(Cypress.env("username"));
  }

  SaveNumber() {
    cy.get(selectors.saveBtn).click();
  }

  CheckNotification() {
    cy.get(selectors.snackBar).should(
      "have.text",
      " Successfully updated call in settings "
    );
  }
}

export default Call_In;
