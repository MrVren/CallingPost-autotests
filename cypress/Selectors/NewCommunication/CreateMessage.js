/// <reference types="Cypress" />
export default {
  mobileToolbarBtn: ".button--grey",
  newCommunicationBtn:
    "button.mat-focus-indicator.mat-icon-button.mat-button-base",
  selectGroupInput: "mat-form-field.mat-form-field", // use eq accordingly
  selectGroup: ".mat-option-text", // use eq accordingly
  selectVoiceMsg: "#mat-checkbox-5 > .mat-checkbox-layout > .mat-checkbox-inner-container",
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
  snackBar: ".toast > .typography-16",
  emailOption: "#mat-checkbox-7 > .mat-checkbox-layout > .mat-checkbox-inner-container",
};
