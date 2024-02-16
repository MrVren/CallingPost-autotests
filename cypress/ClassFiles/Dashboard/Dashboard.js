/// <reference types="Cypress" />

import selectors from "../../Selectors/Dashboard/Dashboard";

class GroupsAndContacts {
  MenuBtn() {
    cy.wait(1000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
  }

  OpenNotifications() {
    cy.wait(1000);
    cy.get(selectors.notificationBtn).click();
  }

  OpenProfileSettings() {
    cy.wait(1000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000)
    cy.get(selectors.profileMenuBtn).eq(6).click({force:true});
  }

  OpenSystemSettings() {
    cy.wait(1000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000)
    cy.get(selectors.profileMenuBtn).eq(9).click({force:true});
  }

  OpenPasswords() {
    cy.wait(1000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000)
    cy.get(selectors.profileMenuBtn).eq(10).click({force:true});
  }

  EnterPassword() {
    cy.wait(1000);
    cy.get(selectors.currentPasswordInput).clear().type("504421");
    cy.get(selectors.newPasswordInput).clear().type("504000");
    cy.get(selectors.confirmNewPasswordInput).clear().type("504000");
  }

  OpenAccountManagers() {
    cy.wait(1000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000)
    cy.get(selectors.profileMenuBtn).eq(11).click({force:true});
  }
}

export default GroupsAndContacts;
