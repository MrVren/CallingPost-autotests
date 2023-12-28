/// <reference types="Cypress" />

import selectors from "../../Selectors/Login/Login";

class ForgotPassword {
  ForgotPassword() {
    cy.fixture("login").then((data) => {
      cy.visit(data.url, {
        failOnStatusCode: false,
      });
    });
    cy.wait(2000);
    cy.get(selectors.forgotPasswordBtn).click();
    cy.wait(1000);
    cy.get(selectors.emailInput).clear().type("talentedfecketech@gmail.com");
    cy.wait(1000);
    cy.get(selectors.sendRecoveryEmailBtn).eq(0).click();
    cy.wait(2000);
  }
}

export default ForgotPassword;
