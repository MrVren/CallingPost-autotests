/// <reference types="Cypress" />

import selectors from "../../Selectors/RecentCommunications/RecentCommunication";

class RecentCommunications {
  OpenCreateNewPage() {
    cy.wait(5000);
    cy.get(selectors.linkBtn).eq(6).click({force: true});
    cy.wait(5000);
  }

  SeeAllCommunications() {
    cy.wait(5000);
    cy.get(selectors.linkBtn).eq(7).click();
    cy.wait(5000);
  }

  OpenGetCredit() {
    cy.wait(1000);
    cy.get(selectors.pinkBtn).eq(4).click();
  }

  OpenEarnRewards() {
    cy.wait(1000);
    cy.get(selectors.pinkBtn).eq(2).click();
    cy.wait(3000);
  }

  GetPdfGuide() {
    cy.wait(1000);
    cy.get(selectors.pinkBtn).eq(1).click();
    cy.wait(3000);
  }

  DownloadApp() {
    cy.wait(1000);
    cy.get(selectors.pinkBtn).eq(0).click();
    cy.wait(3000);
  }

  EnterEmail() {
    cy.get(selectors.SHARE).click({force: true});
    cy.wait(2000);
    cy.get(selectors.referInput).clear().type("Email@gmail.com");
  }

  SendEmail() {
    cy.wait(1000);
    cy.get(selectors.sendBtn).click();
    cy.wait(4000);
  }

  OpenCommunicationDetails() {
    cy.wait(1000);
    cy.get(selectors.communicationTable).click({force: true});
  }
}

export default RecentCommunications;
