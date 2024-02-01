/// <reference types="Cypress" />


import selectors from "../../Selectors/Login/Login";

class ForgotPassword {
  ForgotPassword() {
    cy.visit(`${Cypress.env('url')}/login`, {
      failOnStatusCode: false,
    });
    cy.get(selectors.forgotPasswordBtn).click();
    cy.wait(1000);
    cy.get(selectors.emailInput).clear().type(Cypress.env("fakeUsername"));
    cy.get(selectors.sendRecoveryEmailBtn).eq(0).click();
    cy.get(selectors.snackBar).should("have.text", " A Password reset email is on the way. ")
  }

  IncorrectRecoveryEmail() {
    cy.visit(`${Cypress.env('url')}/login`, {
      failOnStatusCode: false,
    });
    cy.wait(2000);
    cy.get(selectors.forgotPasswordBtn).click();
    cy.wait(1000);
    cy.get(selectors.emailInput).clear().type("email@gmail.com");
    cy.wait(1000);
    cy.get(selectors.sendRecoveryEmailBtn).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.incorrectEmailAlert).should("exist");
  }

  CancelRequest() {
      cy.visit(`${Cypress.env('url')}/login`, {
        failOnStatusCode: false,
      });
    cy.wait(2000);
    cy.get(selectors.forgotPasswordBtn).click();
    cy.wait(1000);
    cy.get(selectors.emailInput).clear().type("email@gmail.com");
    cy.wait(1000);
    cy.get(selectors.sendRecoveryEmailBtn).eq(1).click();
    cy.wait(2000);
  }
}

export default ForgotPassword;
