/// <reference types="Cypress" />

import selectors from "../../Selectors/MyProfile/MyProfile";

class MyProfile {
  MenuBtn() {
    cy.get(selectors.menuBtn).click();
    cy.wait(2000);
  }

  OpenProfileSettings() {
    cy.get(selectors.profileMenuBtn).eq(14).click();
    cy.wait(1000);
    cy.get(selectors.profileSettingBtn).eq(12).click();
    cy.wait(2000);
  }

  EditPicture() {
    cy.wait(1000);
    cy.get(selectors.editPicture).selectFile("512.png", { force: true });
  }

  EditProfileDetails() {
    cy.wait(1000);
    cy.get(selectors.firstNameInput).clear().type("Kristen");
    cy.get(selectors.lastNameInput).clear().type("Fecke");
    cy.get(selectors.organizationNameInput).clear().type("tft");
    cy.get(selectors.selectInput).eq(0).click();
    cy.get(selectors.selectOption).eq(0).click();
  }

  EditPhoneNumbers() {
    cy.wait(1000);
    cy.get(selectors.headerTab).eq(1).click();
    cy.get(selectors.toggleBtn).eq(0).click();
    cy.get(selectors.toggleBtn).eq(0).click();
    cy.wait(1000);
  }

  EditEmails() {
    cy.wait(1000);
    cy.get(selectors.headerTab).eq(2).click();
    cy.wait(1000);
    cy.get(selectors.editEmailBtn).click();
    cy.get(selectors.emailInput).eq(1).clear().type("test@gmail.com");
    cy.get(selectors.toggleBtn).eq(2).click();
    cy.get(selectors.toggleBtn).eq(2).click();

    cy.get(selectors.deleteEmailBtn).eq(1).click();
    cy.get(selectors.confirmDelete).click();
  }

  EditAddress() {
    cy.wait(1000);
    cy.get(selectors.headerTab).eq(3).click();
    cy.get(selectors.linkBtn).eq(-1).click();

    cy.get(selectors.addressInput).type("test 1");

    cy.get(selectors.zipInput).type("67546");

    cy.get(selectors.selectInput).eq(-1).click();

    cy.get(selectors.selectOption).eq(0).click();

    cy.get(selectors.toggleBtn).eq(2).click();

    cy.get(selectors.toggleBtn).eq(2).click();

    cy.get(selectors.linkBtn).eq(-2).click();

    cy.get(selectors.confirmDelete).click();
  }

  SaveProfile() {
    cy.wait(1000);
    cy.get(selectors.primaryBtn).eq(-1).click();
    cy.wait(1000)
    cy.get(selectors.snackBar).should("have.text", " Successfully updated user profile ")
  }
}

export default MyProfile;
