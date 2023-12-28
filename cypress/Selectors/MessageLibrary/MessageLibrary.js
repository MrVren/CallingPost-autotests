/// <reference types="Cypress" />
export default {
  MessageLibraryBtn:
    ".sidenav-wrapper > :nth-child(1) > :nth-child(6) > .mat-focus-indicator", // use eq accordingly
  createNewMsgBtn: 'button[type="button"]',
  messageName: 'input[formcontrolname="messageName"]',
  selectGroupInput: "mat-form-field.mat-form-field", // use eq accordingly
  selectGroup: ".mat-option-text", // use eq accordingly
  createVoiceMsgBtn: 'button[color="primary"]',
  textarea: 'textarea[placeholder="Type your message here..."]',
  checkbox: 'input[type="checkbox"]',
  sendMessageBtn: "button.button-primary-inverted", // use eq 1
  emailSubjectInput: 'input[placeholder="Enter Your Email Subject Here"]',
  messageTable: "table tbody",
  saveEditMsg: "button.button--lime-green",
  confirmDel: "button.button--blue",
};
