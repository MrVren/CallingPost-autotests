/// <reference types="Cypress" />
export default {
  groupsAndContactsBtn:
    ".sidenav-wrapper > :nth-child(1) > :nth-child(4) > .mat-focus-indicator",
  createGroupBtn: 'button[type="type"]',
  groupNameInput: 'input[placeholder="Group Name (required)"]',
  saveGrpBtn: "button.mat-raised-button", // use eq 0
  selectGroupInput: "mat-form-field.mat-form-field", // use eq accordingly
  selectGroup: ".mat-option-text", // use eq accordingly
  tableRow: ".table-row", // use eq accordingly
  groupsTableScroll: ".group-desktop-wrapper",
  addContactBtn: "button.btn-create-group",
  addExisting: 'div[mat-dialog-close="add-existing"]',
  selectContact: ".mat-checkbox-inner-container", // use eq 1
  addSelected: "._add-selected", // use eq 0
  delContact: ".cdk-column-delete", // use eq 1
  confirmDel: ".button--blue",
  editNameInput: "input.mat-input-element",
  saveEditName: "button._save",
  searchBtn: 'button.btn-search',
  searchInput: 'input.cdk-text-field-autofill-monitored',
  filterBtn: 'button[aria-label="Filters Menu"]',
  sortFilter: 'mat-select',
  selectFilterOption: 'mat-option[role="option"]',
  learnMoreBtn: '.learn-more',
  closeModal: 'mat-icon[role="img"]',
  cancelBtn: 'div.btn',
  newCommunication: 'button[aria-label="send-message"]',
  addContact: '.btn-create-group.mat-mini-fab',
  editKeyword: 'button[aria-label="group-keyword"]',
  moreOptionsBtn: 'button[aria-label="More Menu"]',
  menuOptions: 'button[role="menuitem"]',
  removeBadNumber: '.btn.__confirm',
  addManually: 'Add New Contact', // use .contains
  addManuallyOption: '[mat-dialog-close="add-manually"]',
  addManuallyInputs: '.mat-form-field-infix',
  allContactsTab: 'div[role="tab"]', // use eq 1
  allContactsHeads: 'span[mattooltip="Ready-To-Receive"]',
  contactSearchBtn: 'button[aria-label="search"]',
  discardBtn: 'button[color="primary"]',
  closeModalBtn: 'span.close',
  toggleBtn: '.mat-slide-toggle',
  deleteIcon: '.warn-icon',
  deleteContact: '._border',


  editPicture: 'input[type="file"]',
  firstNameInput: 'input[formcontrolname="firstName"]',
  lastNameInput: 'input[formcontrolname="lastName"]',
  selectInput: ".mat-select-value", // use eq accordingly
  selectOption: ".mat-option-text", // use eq 0
  toggleBtn: ".mat-slide-toggle-bar",
  noBorderBtn: 'button.remove-padding-btn',
  phoneInput: 'input[formcontrolname="phoneNumber"]',
  deleteProfileIcon: 'button[color="warn"]',
  emailInput: 'input[formcontrolname="email"]',
  streetInput: 'input[formcontrolname="addressLine1"]',
  zipInput: 'input[formcontrolname="zip"]',
  cancelDeleteBtn: 'button.button-primary-inverted',
  saveContactProfile: '._blue',
  snackBar: ".toast > .typography-16",
};
