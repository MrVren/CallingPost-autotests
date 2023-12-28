/// <reference types="Cypress" />

import selectors from "../../Selectors/TextKeywords/TextKeywords";

class TextKeywords {
  OpenTextKeywords() {
    cy.wait(1000);
    cy.get(selectors.textKeywordBtn).click({ force: true });
  }

  CreateKeyword() {
    cy.wait(1000);
    cy.get(selectors.createKeywordBtn).click();
  }

  EnterKeywordDetails() {
    cy.wait(1000);
    cy.get(selectors.keywordNameInput).clear().type("Testing");
    cy.wait(1000);
    cy.get(selectors.paymentInput).click();
    cy.wait(1000);
    cy.get(selectors.selectOption).eq(-1).click();
    cy.wait(1000);
    cy.get(selectors.paymentOptionInput).click();
    cy.wait(1000);
    cy.get(selectors.selectOption).eq(0).click();
  }

  SaveKeyword() {
    cy.wait(1000);
    cy.get(selectors.saveKeywordBtn).click();
    cy.wait(2000);
  }
}

export default TextKeywords;
