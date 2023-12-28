/// <reference types="Cypress" />
export default {
  createAccountBtn: 'a[routerlink="/registration"]',
  phoneNumberInput:
    'input[placeholder="Phone Number (this will be your UserID)"]',
  pinInput: 'input[placeholder="6 Digit PIN (numbers only)"]',
  emailInput: 'input[placeholder="Email Address"]',
  nameInput: 'input[formcontrolname="firstName"]',
  organizationInput: "div.mat-select-trigger",
  selectOrganization: ".mat-option-text", // use eq 0
  nextBtn: 'button[type="submit"]',
  getStartedBtn: 'button[routerlink="/dashboard"]',
  selectTerms: 'input[type="checkbox"]',
};
