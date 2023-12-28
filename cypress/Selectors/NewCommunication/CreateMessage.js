/// <reference types="Cypress" />
export default {
  newCommunicationBtn:
    ".sidenav-wrapper > :nth-child(1) > :nth-child(3) > .mat-focus-indicator",
  selectGroupInput: "mat-form-field.mat-form-field", // use eq accordingly
  selectGroup: ".mat-option-text", // use eq accordingly
  createVoiceMsgBtn: 'button[color="primary"]',
  textarea: 'textarea[placeholder="Type your message here..."]',
  checkbox: 'input[type="checkbox"]',
  sendMessageBtn: "button.button--lime-green", // use eq 1
  emailSubjectInput: 'input[placeholder="Enter Your Email Subject Here"]',
};
