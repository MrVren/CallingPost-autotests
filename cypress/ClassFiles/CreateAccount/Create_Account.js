/// <reference types="Cypress" />

import selectors from "../../Selectors/CreateAccount/CreateAccount";

class CreateAccount {
  OpenRegistration() {
      cy.visit(`${Cypress.env('url')}/login`, {
        failOnStatusCode: false,
      });
    cy.get(selectors.createAccountBtn).click();
  }

  AddPhoneNumber() {
    cy.get(selectors.phoneNumberInput)
      .clear()
      .type(
        `2345${Math.ceil(
          Math.random() * (1 + 999999 - 100000) + 100000
        ).toString()}`
      );
  }

  AddPin() {
    cy.get(selectors.pinInput).clear().type("123456");
  }

  AddEmail() {
    cy.get(selectors.emailInput).clear().type("kristenfeche@gmail.com");
  }

  AddName() {
    cy.get(selectors.nameInput).clear().type("Kristen Test");
  }

  SelectOrganization() {
    cy.get(selectors.organizationInput).click();
    cy.get(selectors.selectOrganization).eq(0).click();
  }

  OpenPlans() {
    cy.get(selectors.selectTerms).click({ force: true });
    cy.get(selectors.nextBtn).click();
  }

  GetStarted() {
    cy.get(selectors.getStartedBtn).click();
  }
}

export default CreateAccount;
