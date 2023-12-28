/// <reference types="Cypress" />

import selectors from "../../Selectors/RewardCenter/RewardCenter";

class RewardCenter {
  OpenRewardCenter() {
    cy.wait(1000);
    cy.get(selectors.rewardCenterBtn).click({ force: true });
  }

  OpenReferFriend() {
    cy.wait(1000);
    cy.get(selectors.rewardCards).eq(0).click();
  }

  EnterEmail() {
    cy.wait(1000);
    cy.get(selectors.referInput).clear().type("Email@gmail.com");
  }

  SendEmail() {
    cy.wait(1000);
    cy.get(selectors.sendBtn).click();
    cy.wait(4000);
  }

  OpenUpgradeUnlimited() {
    cy.wait(1000);
    cy.get(selectors.rewardCards).eq(1).click();
  }

  SelectContacts() {
    cy.wait(1000);
    cy.get(selectors.selectContacts).click();
    cy.wait(1000);
    cy.get(selectors.selectOption).eq(1).click();
  }

  CreditPricing() {
    cy.wait(1000);
    cy.get(selectors.creditPricingBtn).click();
  }

  UpgradePremium() {
    cy.wait(5000);
    cy.get(selectors.sendBtn).eq(-1).click();
    cy.wait(3000);
    cy.get(selectors.sendBtn).eq(-1).click();
  }

  OpenWeeklyCommunication() {
    cy.wait(1000);
    cy.get(selectors.rewardCards).eq(2).click();
  }

  SelectPlan() {
    cy.wait(4000);
    cy.get(selectors.tftBtn).eq(0).click();
    cy.fixture("login").then((data) => {
      cy.wait(2000);
      cy.get(selectors.usernameInput).clear().type(data.username);
      cy.wait(2000);
      cy.get(selectors.passwordInput).clear().type(data.password);
      cy.wait(1000);
      cy.get(selectors.loginBtn).click();
    });
  }

  RecentCommunications() {
    cy.wait(5000);
    cy.get(selectors.recentCommunication).scrollIntoView();
  }

  OpenWriteReview() {
    cy.wait(1000);
    cy.get(selectors.rewardCards).eq(4).click();
  }

  EnterReview() {
    cy.wait(1000);
    cy.get(selectors.referInput).clear().type("Test Review");
  }

  SubmitReview() {
    cy.wait(1000);
    cy.get(selectors.sendBtn).click();
    cy.wait(4000);
  }
}

export default RewardCenter;
