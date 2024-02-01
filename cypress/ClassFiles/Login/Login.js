/// <reference types="Cypress" />

import selectors from "../../Selectors/Login/Login";

class Login {
  ValidLogin() {
      cy.LoginWithSessionStore(Cypress.env('username'), Cypress.env('password'), `${Cypress.env('url')}/login`)
      cy.wait(3000)
      this.OpenDashboard()
    }


  OpenDashboard() {
    cy.visit(`${Cypress.env('url')}/dashboard/`)
  }

  LoginWithIncorrectUsername() {
      cy.visit(`${Cypress.env('url')}/login`, {
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

  }

  LoginWithIncorrectPassword() {
      cy.visit(`${Cypress.env('url')}/login`, {
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
  }

  LoginWithIncorrectUsernameAndPassword() {
      cy.visit(`${Cypress.env('url')}/login`, {
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
  }
}

export default Login;
