/// <reference types="Cypress" />

import selectors from "../../Selectors/TextKeywords/TextKeywords";

//Call this function to generate random string for keyword name
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
  //store generated keyword to check if it was saved
  constructor() {

    this.generatedKeyword = ' '; 
    }

  OpenTextKeywords() {
    cy.wait(1000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000);
    cy.get(selectors.textKeywordBtn).eq(13).click({ force: true });
  }

  CreateKeyword() {
    cy.wait(1000);
    cy.get(selectors.createKeywordBtn).click({force:true});
  }

  EnterKeywordDetails() {
    this.generatedKeyword = `Testing${generateRandomString()}`; 
    cy.wait(1000);
    cy.get(selectors.keywordNameInput).clear().type(this.generatedKeyword);
    cy.wait(2000); 
    }

  SaveKeyword() {
    cy.contains('span.mat-button-wrapper', 'Confirm Keyword').click({force:true});
    cy.wait(2000); 
    cy.contains("span.mat-button-wrapper", "Don't Assign Yet").click({force:true});
   // cy.get(selectors.saveKeywordBtn).click();
    cy.wait(5000);
    cy.get(selectors.keywordList).should('contain', this.generatedKeyword); 
  }

// Method to delete a keyword
DeleteKeyword() {
// In your test
  cy.contains('div.menu-item__title', 'Text Keywords').click({force:true});
  cy.wait(3000);
  cy.get('button.mat-mini-fab mat-icon').contains('more_horiz').click({force:true});
  cy.get(selectors.deleteKeywordOption).click(); 
  // Use the selector to find the keyword and then navigate to the checkbox
  cy.get(selectors.keywordListItem).contains(this.generatedKeyword)
  .parents('.list-item-inner')
  .find(selectors.keywordCheckbox)
  .click();
  // Click the main delete button
  cy.contains('span.typography-16', 'Delete').click({force:true});
  cy.wait(3000); 
  // Click the delete confirmation button
  cy.get('mat-dialog-container button.mat-button-base').contains('span.mat-button-wrapper', 'Delete').click({force:true});
  cy.wait(2000); 
  // Verify that the generated keyword has been deleted
  cy.get(selectors.keywordList).should('not.contain', this.generatedKeyword);
}

}


export default TextKeywords;