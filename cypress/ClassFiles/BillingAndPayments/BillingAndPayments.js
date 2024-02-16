/// <reference types="Cypress" />

import selectors from "../../Selectors/BillingAndPayments/BillingAndPayments";

class Call_In {
  OpenBilling() {
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000);
    cy.get(selectors.profileMenuBtn).eq(7).click({force:true});
    cy.wait(1000);
  }

  AddBankAccount() {
    cy.wait(1000);
    cy.get(selectors.addNewPaymentBtn).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.paymentTabs).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.accountName).clear().type('John Doe');
    cy.get(selectors.bankName).clear().type('Bank of America');
    cy.get(selectors.routingNumber).clear().type('021000021');
    cy.get(selectors.accountNumber).clear().type('1234567890');
    cy.get(selectors.saveBtn).eq(-1).click();
    cy.wait(1000);
  }

  AddNewPaymentMethod() {
    cy.wait(1000);
    cy.get(selectors.addNewPaymentBtn).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.cardNumInput).clear().type("374245455400126");
    cy.get(selectors.dateInput).clear().type("0526");
    cy.get(selectors.cvvInput).clear().type("203");
    cy.get(selectors.emailInput).clear().type("test@gmail.com");
    cy.get(selectors.addressInput).clear().type("Virginia");
    cy.get(selectors.zipInput).clear().type("45678");
    cy.get(selectors.cityInput).clear().type("VA");
    cy.get(selectors.stateInput).clear().type("Texas");
    cy.get(selectors.saveBtn).eq(-1).click();
    cy.wait(1000);
  }

  UpdatePaymentMethod() {
    /*
    cy.get(selectors.cardsTable).children().each((child) => {
      if ((child.contains(""))) {
        cy.wrap(child)
        .children()
        .children()
        .eq(-1)
        .children()
        .eq(0).click();
        */
    cy.contains('div', '7890')
      .parent()
      .parent()
      .find('.button-update')
      .click();//
    cy.wait(1000);
    cy.get(selectors.bankName).clear().type("Another Bank of America");
    cy.get(selectors.checkbox).uncheck({ force: true });
    cy.get(selectors.saveBtn).eq(-1).click();
    cy.wait(1000);


    cy.contains('div', '0126')
      .parent()
      .parent()
      .find('.button-update')
      .click();
    cy.wait(1000);
    cy.get(selectors.checkbox).check({ force: true });
    cy.get(selectors.saveBtn).eq(-1).click();
    cy.wait(1000);
  }

  DeletePaymentMethod() {
    cy.contains('div', '7890')
    .parent()
    .parent()
    .find(selectors.noBorderBtn).eq(1)
    .click()
    cy.wait(1000);
    cy.get(selectors.confirmDelete).click();
    cy.wait(1000);
  }

  ViewBillingHistory() {
    cy.wait(1000);
    cy.get(selectors.noBorderBtn).eq(-1).click();
  }

  OpenInvoice() {
    cy.wait(1000);
    cy.get(selectors.noBorderBtn).eq(-3).click();
  }

  BackToBilling() {
    cy.wait(1000);
    cy.get(selectors.noBorderBtn).eq(-1).click();
    cy.wait(1000);
    cy.get(selectors.noBorderBtn).eq(2).click();
    cy.wait(1000);
  }

  PauseAccount() {
    cy.wait(1000);
    cy.get(selectors.noBorderBtn).eq(-1).click();
    cy.wait(1000);
    cy.get(selectors.cancelBtn).click();
  }

  ChangePlan() {
    cy.wait(1000);
    cy.get(selectors.changePlanBtn).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.extendBtn).click();
    cy.wait(1000);
    cy.get(selectors.saveBtn).click();
    cy.wait(1000);
    cy.get(selectors.cancelBtn).click();
    cy.wait(1000);
  }

  UpgradePlan() {
    cy.wait(1000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000);
    cy.get(selectors.profileMenuBtn).eq(7).click({force:true});
    cy.wait(2000);
    cy.get(selectors.changePlanBtn).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.extendBtn).click();
    cy.wait(1000);
    cy.get(selectors.saveBtn).click();
  }
}

export default Call_In;


