/// <reference types="Cypress" />

import selectors from "../../Selectors/Login/Login";

class Login {
  ValidLogin() {
    cy.fixture("login").then((data) => {
      cy.LoginWithSessionStore(data.username, data.password, data.url)
      cy.wait(3000)
      this.OpenDashboard()
      // cy.get(selectors.tftBtn).eq(0).click();
    });
  }

  OpenDashboard() {
    cy.visit('https://apps.callingpost.com/dashboard/')
  }

  LoginWithIncorrectUsername() {
    cy.fixture("login").then((data) => {
      cy.visit(data.url, {
        failOnStatusCode: false,
      });
      cy.wait(2000);
      cy.get(selectors.usernameInput).clear().type("417850442100");
      cy.wait(2000);
      cy.get(selectors.passwordInput).clear().type("504421");
      cy.wait(1000);
      cy.get(selectors.loginBtn).click();
      cy.wait(4000);
      cy.get(selectors.invalidAlert).should("exist");
    });
  }

  LoginWithIncorrectPassword() {
    cy.fixture("login").then((data) => {
      cy.visit(data.url, {
        failOnStatusCode: false,
      });
      cy.wait(2000);
      cy.get(selectors.usernameInput).clear().type("4178504421");
      cy.wait(2000);
      cy.get(selectors.passwordInput).clear().type("50442100");
      cy.wait(1000);
      cy.get(selectors.loginBtn).click();
      cy.wait(4000);
      cy.get(selectors.invalidAlert).should("exist");
    });
  }

  LoginWithIncorrectUsernameAndPassword() {
    cy.fixture("login").then((data) => {
      cy.visit(data.url, {
        failOnStatusCode: false,
      });
      cy.wait(2000);
      cy.get(selectors.usernameInput).clear().type("417850442100");
      cy.wait(2000);
      cy.get(selectors.passwordInput).clear().type("50442100");
      cy.wait(1000);
      cy.get(selectors.loginBtn).click();
      cy.wait(4000);
      cy.get(selectors.invalidAlert).should("exist");
    });
  }
}

export default Login;
