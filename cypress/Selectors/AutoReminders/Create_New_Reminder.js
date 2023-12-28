/// <reference types="Cypress" />
export default {
  autoReminderBtn:
    ":nth-child(11) > .mat-focus-indicator",
  createReminderBtn: "button.button--lime-green",
  reminderName: 'input[formcontrolname="reminderName"]',
  selectGroupInput: 'mat-select[formcontrolname="groupId"]',
  selectOption: ".mat-option-text", // use eq accordingly
  selectPhoneInput: 'mat-select[formcontrolname="phoneNumberToCall"]',
  selectCallerInput: 'mat-select[formcontrolname="callerId"]',
  openCalendar: 'input[formcontrolname="startDateTime"]',
  repeatInput: 'mat-select[formcontrolname="frequency"]',
};
