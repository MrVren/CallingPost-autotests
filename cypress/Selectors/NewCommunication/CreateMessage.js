/// <reference types="Cypress" />
export default {
  newCommunicationBtn:
    ".sidenav-wrapper > :nth-child(1) > :nth-child(3) > .mat-focus-indicator",
  selectGroupInput: "mat-form-field.mat-form-field", // use eq accordingly
  selectGroup: ".mat-option-text", // use eq accordingly
  selectVoiceMsg: "#mat-checkbox-7 > .mat-checkbox-layout > .mat-checkbox-inner-container",
  createVoiceMsgBtn: '.--next',
  cancelBtn: '.button[color="primary"]',
  addIdBtn: ".btn-create-caller-ids",
  phoneInput: 'input[formcontrolname="phoneNumber"]',
  textarea: 'textarea[formcontrolname="sMSMessage"]',
  checkbox: 'input[type="checkbox"]',
  viewMsgBtn: '.prior-message-selection',
  searchInput: '[id="mat-input-6"]',
  previewIcon: '#mat-dialog-0 > app-use-previous-dialog > div > div.message-container > div:nth-child(1) > div > app-message-preview > div > div > button',
  selectMessageBtn: 'button[color="primary"]',
  sendMessageBtn: "button.button--lime-green", // use eq 1
  emailSubjectInput: 'input[formcontrolname="emailSubject"]',
};
