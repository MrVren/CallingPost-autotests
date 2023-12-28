/// <reference types="Cypress" />

import selectors from "../../Selectors/Dashboard/Dashboard";

class GroupsAndContacts {
  MenuBtn() {
    cy.wait(5000);
    cy.get(selectors.menuBtn).click();
    cy.wait(2000);
  }

  OpenNotifications() {
    cy.wait(1000);
    cy.get(selectors.notificationBtn).click();
    cy.wait(5000);
  }

  OpenProfileSettings() {
    cy.wait(1000);
    cy.get(selectors.profileMenuBtn).eq(14).click();
    cy.wait(1000);
    cy.get(selectors.profileSettingBtn).eq(12).click();
    cy.wait(5000);
  }

  OpenSystemSettings() {
    cy.wait(1000);
    cy.get(selectors.profileMenuBtn).eq(14).click();
    cy.wait(1000);
    cy.get(selectors.profileSettingBtn).eq(15).click();
    cy.wait(5000);
  }

  OpenPasswords() {
    cy.wait(1000);
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

  OpenAccountManagers() {
    cy.wait(1000);
    cy.get(selectors.profileMenuBtn).eq(14).click();
    cy.wait(1000);
    cy.get(selectors.profileSettingBtn).eq(17).click();
    cy.wait(5000);
  }
}

export default GroupsAndContacts;
