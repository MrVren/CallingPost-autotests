/// <reference types="Cypress" />

import selectors from "../../Selectors/AccountOverview/AccountOverview";

class AccountOverview {
  OpenPremiumPlan() {
    cy.wait(5000);
    cy.get(selectors.premiumPlanBtn).click();
    cy.wait(5000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000)
    cy.get(selectors.homeBtn).click();
  }

  OpenMyProfile() {
    cy.wait(1000);
    cy.get(selectors.linkBtn).eq(0).click();
    cy.wait(5000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000);
    cy.get(selectors.homeBtn).click();
  }

  OpenMySettings() {
    cy.wait(1000);
    cy.get(selectors.linkBtn).eq(1).click();
    cy.wait(5000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000);
    cy.get(selectors.homeBtn).click();
  }

  OpenMyBilling() {
    cy.wait(1000);
    cy.get(selectors.linkBtn).eq(2).click();
    cy.wait(5000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000);
    cy.get(selectors.homeBtn).click();
  }
}

export default AccountOverview;
