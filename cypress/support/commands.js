// ***********************************************
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// ***********************************************
//


let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
  cy.log("Save");
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
  cy.log("Restore");
});

import selectors from "../Selectors/Login/Login";

Cypress.Commands.add("LoginWithSessionStore", (email, passwd, url) => {
  cy.session([email, passwd], () => {
    cy.visit(url)
    cy.get(selectors.usernameInput).clear().type(email);
    cy.get(selectors.passwordInput).clear().type(passwd);
    cy.get(selectors.loginBtn).click();
    cy.wait(2000)
  },
  {
    cacheAcrossSpecs: true
  })

})