/// <reference types="Cypress" />

import selectors from "../../Selectors/Login/Login";

class Login {
  ValidLogin() {
    cy.fixture("login").then((data) => {
      cy.visit(data.url, {
        failOnStatusCode: false,
      });
      cy.wait(2000);
      cy.get(selectors.usernameInput).clear().type(data.username);
      cy.wait(2000);
      cy.get(selectors.passwordInput).clear().type(data.password);
      cy.wait(1000);
      cy.get(selectors.loginBtn).click();
      cy.wait(8000);
     // cy.get(selectors.tftBtn).eq(0).click();
    });
    cy.wait(3000);
  }

  OpenDashboard() {
    cy.wait(1000);
    cy.fixture("login").then((data) => {
      cy.visit(data.url, {
        failOnStatusCode: false,
      });
    });
  }
}

export default Login;
