/// <reference types="Cypress" />
export default {
  groupsAndContactsBtn:
    ".sidenav-wrapper > :nth-child(1) > :nth-child(4) > .mat-focus-indicator",
  createGroupBtn: 'button[type="type"]',
  groupNameInput: 'input[placeholder="Group Name (required)"]',
  saveGrpBtn: "button.mat-raised-button", // use eq 0
  selectGroupInput: "mat-form-field.mat-form-field", // use eq accordingly
  selectGroup: ".mat-option-text", // use eq accordingly
  allContactsTab: 'div[role="tab"]', // use eq 1
};
