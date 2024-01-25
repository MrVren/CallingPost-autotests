/// <reference types="Cypress" />

import selectors from "../../Selectors/Login/Login";

class ForgotUserId {
  ForgotUserId() {
    cy.fixture("login").then((data) => {
      cy.visit(data.url, {
        failOnStatusCode: false,
      });
    });
    cy.get(selectors.forgotUserIdBtn).click();
    cy.get(selectors.emailInput).clear().type("michael.droz+2@gmail.com");
    cy.get(selectors.sendRecoveryEmailBtn).eq(0).click();
    cy.get(selectors.snackBar).should("have.text", " An email with your username is on the way. ")
  }

  IncorrectRecoveryEmail() {
    cy.fixture("login").then((data) => {
      cy.visit(data.url, {
        failOnStatusCode: false,
      });
    });
    cy.get(selectors.forgotUserIdBtn).click();
    cy.get(selectors.emailInput).clear().type("email@gmail.com");
    cy.get(selectors.sendRecoveryEmailBtn).eq(0).click();
    cy.get(selectors.incorrectEmailAlert).should("exist");
  }

  CancelRequest() {
    cy.fixture("login").then((data) => {
      cy.visit(data.url, {
        failOnStatusCode: false,
      });
    });
    cy.wait(500);
    cy.get(selectors.forgotUserIdBtn).click();
    cy.get(selectors.sendRecoveryEmailBtn).eq(1).click();
    cy.url().should("eq", "https://test.callingpost.com/login")
  }
}

export default ForgotUserId;
