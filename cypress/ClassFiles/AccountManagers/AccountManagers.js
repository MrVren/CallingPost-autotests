/// <reference types="Cypress" />

import selectors from "../../Selectors/AccountManagers/AccountManagers";

class AccountManager {
  OpenAccountManagers() {
    cy.wait(5000);
    cy.get(selectors.profileMenuBtn).eq(14).click();
    cy.wait(1000);
    cy.get(selectors.profileSettingBtn).eq(17).click();
    cy.wait(5000);
  }

  InviteAccountManager() {
    cy.wait(1000);
    cy.get(selectors.inviteManagerBtn).click();
    cy.wait(1000);
    cy.get(selectors.emailInput).clear().type("test@gmail.com");
    cy.wait(1000);
    cy.get(selectors.selectGroup).eq(-1).click();
    cy.wait(1000);
    cy.get(selectors.inviteManagerBtn).click();
  }

  WithoutEmailInvite() {
    cy.wait(1000);
    cy.get(selectors.inviteManagerBtn).click();
    cy.wait(1000);
    cy.get(selectors.selectGroup).eq(-1).click();
    cy.wait(1000);
    cy.get(selectors.inviteManagerBtn).click();
    cy.wait(1000);
    cy.get(selectors.emailInput).scrollIntoView();
    cy.wait(3000);
  }

  CancelSetting() {
    cy.wait(1000);
    cy.get(selectors.cancelBtn).click();
  }

  CancelInvite() {
    cy.wait(1000);
    cy.get(selectors.cancelInvite).eq(2).click();
    cy.wait(1000);
    cy.get(selectors.inviteManagerBtn).eq(1).click();
  }
}

export default AccountManager;
