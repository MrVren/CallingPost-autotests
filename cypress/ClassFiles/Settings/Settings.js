/// <reference types="Cypress" />

import selectors from "../../Selectors/Settings/Settings";

class Settings {
  MenuBtn() {
    cy.wait(5000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000);
    cy.get(selectors.menuBtn).click({force:true});
    cy.wait(2000);
  }

  OpenNotifications() {
    cy.wait(5000);
    cy.get(selectors.notificationBtn).click({force:true});
    cy.wait(5000);
  }

  OpenProfileIcon() {
    cy.wait(5000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000);
    cy.get(selectors.profileMenuBtn).eq(6).click({force:true});
    cy.wait(5000);
  }

  OpenProfileSettings() {
    cy.wait(5000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000);
    cy.get(selectors.profileMenuBtn).eq(6).click({force:true});
    cy.wait(5000);
  }

  OpenBilling() {
    cy.wait(5000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000);
    cy.get(selectors.profileMenuBtn).eq(7).click({force:true});
    cy.wait(5000);
  }

  OpenCallIn() {
    cy.wait(5000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000);
    cy.get(selectors.profileMenuBtn).eq(8).click({force:true});
    cy.wait(5000);
  }

  OpenSystemSettings() {
    cy.wait(5000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000);
    cy.get(selectors.profileMenuBtn).eq(9).click({force:true});
    cy.wait(5000);
  }

  OpenPasswords() {
    cy.wait(5000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000);
    cy.get(selectors.profileMenuBtn).eq(10).click({force:true});
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
    cy.wait(5000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000);
    cy.get(selectors.profileMenuBtn).eq(11).click({force:true});
    cy.wait(5000);
  }

  LogOut() {
    cy.wait(5000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000);
    cy.get(selectors.profileMenuBtn).eq(20).click({force:true});
    cy.wait(5000);
  }
}

export default Settings;
