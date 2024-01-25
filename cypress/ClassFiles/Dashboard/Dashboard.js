/// <reference types="Cypress" />

import selectors from "../../Selectors/Dashboard/Dashboard";

class GroupsAndContacts {
  MenuBtn() {
    cy.wait(1000);
    cy.get(selectors.menuBtn).click();
  }

  OpenNotifications() {
    cy.wait(1000);
    cy.get(selectors.notificationBtn).click();
  }

  OpenProfileSettings() {
    cy.wait(1000);
    cy.get(selectors.profileMenuBtn).eq(14).click();
    cy.get(selectors.profileSettingBtn).eq(12).click();
  }

  OpenSystemSettings() {
    cy.wait(1000);
    cy.get(selectors.profileMenuBtn).eq(14).click();
    cy.get(selectors.profileSettingBtn).eq(15).click();
  }

  OpenPasswords() {
    cy.wait(1000);
    cy.get(selectors.profileMenuBtn).eq(14).click();
    cy.get(selectors.profileSettingBtn).eq(16).click();
  }

  EnterPassword() {
    cy.wait(1000);
    cy.get(selectors.currentPasswordInput).clear().type("504421");
    cy.get(selectors.newPasswordInput).clear().type("504000");
    cy.get(selectors.confirmNewPasswordInput).clear().type("504000");
  }

  OpenAccountManagers() {
    cy.wait(1000);
    cy.get(selectors.profileMenuBtn).eq(14).click();
    cy.get(selectors.profileSettingBtn).eq(17).click();
  }
}

export default GroupsAndContacts;
