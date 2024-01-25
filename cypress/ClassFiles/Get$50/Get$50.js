/// <reference types="Cypress" />

import selectors from "../../Selectors/Get$50/Get$50";

class Get$50 {
  OpenGet$50() {
    cy.get(selectors.get$50).eq(10).click();
  }

  OpenRewardCenter() {
    cy.get(selectors.rewardCenterBtn).click({ force: true });
  }

  OpenReferFriend() {
    cy.get(selectors.rewardCards).eq(0).click();
  }

  EnterEmail() {
    cy.get(selectors.referInput).clear().type("Email@gmail.com");
  }

  EnterMultipleEmails() {
    cy.get(selectors.referInput)
      .clear()
      .type("Email@gmail.com,Email@gmail.com,Email@gmail.com,Email@gmail.com");
  }

  SendEmail() {
    cy.contains(selectors.sendBtn).click();
  }
}

export default Get$50;
