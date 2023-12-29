/// <reference types="Cypress" />
export default {
  textKeywordBtn:
    ".sidenav-wrapper > :nth-child(1) > :nth-child(8) > .mat-focus-indicator",
  createKeywordBtn: "button.button--rounded",
  keywordNameInput: 'input[placeholder="Enter keyword here."]',
  paymentInput: 'mat-select[formcontrolname="paymentProfileID"]',
  paymentOptionInput: 'mat-select[formcontrolname="prepayOptionId"]',
  //selectOption: ".mat-option-text",
  selectionOption: ".mat-select-placeholder", 
  saveKeywordBtn: "button.button-submit",
  keywordList: '.list-item__keyword span',
  deleteKeywordMenu: 'app-more-actions > div > .mat-focus-indicator > .mat-button-wrapper > .mat-icon', 
  deleteKeywordOption: ':nth-child(1) > .mat-button-wrapper > .typoraphy-14',
  keywordListItem: '.list-item__keyword',
  keywordCheckbox: '.list-item-selection mat-checkbox'
};
