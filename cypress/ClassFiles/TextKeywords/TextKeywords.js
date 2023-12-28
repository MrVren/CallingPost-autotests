/// <reference types="Cypress" />

import selectors from "../../Selectors/TextKeywords/TextKeywords";

function generateRandomString() {
  let length = 12 - "Testing".length; // Adjust length based on the base word
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomString;
}

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
      let randomString = generateRandomString(); // Call the function to generate a random string
      cy.wait(1000);
      cy.get(selectors.keywordNameInput).clear().type(`Testing${randomString}`);
      cy.wait(1000);
      // Uncomment and complete these if needed
      // cy.get(selectors.paymentInput).click();
      // cy.wait(1000);
     // cy.get(selectors.selectOption).eq(-1).click();
      // cy.wait(1000);
      // cy.get(selectors.paymentOptionInput).click();
    //  cy.wait(2000);
     // cy.get(selectors.selectOption).eq(0).click();
  }

  SaveKeyword() {
    cy.wait(1000);
    cy.get(selectors.saveKeywordBtn).click();
    cy.wait(2000);
  }
}

export default TextKeywords;
