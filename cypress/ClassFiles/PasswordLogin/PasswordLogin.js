/// <reference types="Cypress" />

import selectors from "../../Selectors/PasswordLogin/PasswordLogin";

class Settings {
  OpenPasswords() {
    cy.wait(5000);
    cy.get(selectors.profileMenuBtn).eq(14).click();
    cy.wait(1000);
    cy.get(selectors.profileSettingBtn).eq(16).click();
    cy.wait(2000);
  }

  EnterPassword() {
    cy.wait(1000);
    cy.get(selectors.currentPasswordInput).clear().type("504421");
    cy.wait(1000);
    cy.get(selectors.newPasswordInput).clear().type("504000");
    cy.wait(1000);
    cy.get(selectors.confirmNewPasswordInput).clear().type("504000");
    cy.wait(5000);
  }

  OpenExternalLinks() {
    cy.wait(1000);
    cy.get(selectors.headerTab).eq(1).click();
  }
}

export default Settings;
