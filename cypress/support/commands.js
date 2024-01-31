import selectors from "../Selectors/Login/Login";

Cypress.Commands.add("LoginWithSessionStore", (email, passwd, url) => {
  cy.session([email, passwd], () => {
    cy.visit(url)
    cy.get(selectors.usernameInput).clear().type(email);
    cy.get(selectors.passwordInput).clear().type(passwd);
    cy.get(selectors.loginBtn).click();
    cy.wait(5000)
  },
  {
    cacheAcrossSpecs: true
  })

})