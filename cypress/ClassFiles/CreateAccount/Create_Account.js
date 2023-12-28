/// <reference types="Cypress" />

import selectors from "../../Selectors/CreateAccount/CreateAccount";

class CreateAccount {
  OpenRegistration() {
    cy.fixture("login").then((data) => {
      cy.visit(data.url, {
        failOnStatusCode: false,
      });
    });
    cy.wait(2000);
    cy.get(selectors.createAccountBtn).click();
  }

  AddPhoneNumber() {
    cy.wait(1000);
    cy.get(selectors.phoneNumberInput)
      .clear()
      .type(
        `2345${Math.ceil(
          Math.random() * (1 + 999999 - 100000) + 100000
        ).toString()}`
      );
  }

  AddPin() {
    cy.wait(1000);
    cy.get(selectors.pinInput).clear().type("123456");
  }

  AddEmail() {
    cy.wait(1000);
    cy.get(selectors.emailInput).clear().type("kristenfeche@gmail.com");
  }

  AddName() {
    cy.wait(1000);
    cy.get(selectors.nameInput).clear().type("Kristen Test");
  }

  SelectOrganization() {
    cy.wait(1000);
    cy.get(selectors.organizationInput).click();
    cy.wait(1000);
    cy.get(selectors.selectOrganization).eq(0).click();
  }

  OpenPlans() {
    cy.wait(1000);
    cy.get(selectors.selectTerms).click({force:true});
    cy.wait(1000);
    cy.get(selectors.nextBtn).click();
  }

  GetStarted() {
    cy.wait(12000);
    cy.get(selectors.getStartedBtn).click();
  }
}

export default CreateAccount;
