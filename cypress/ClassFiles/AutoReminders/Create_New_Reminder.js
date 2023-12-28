/// <reference types="Cypress" />

import selectors from "../../Selectors/AutoReminders/Create_New_Reminder";

class CreateReminder {
  OpenAutoReminders() {
    cy.wait(5000);
    cy.get(selectors.autoReminderBtn).click({ force: true });
  }

  OpenCreateReminder() {
    cy.wait(1000);
    cy.get(selectors.createReminderBtn).click();
  }

  EnterReminderDetails() {
    cy.wait(1000);
    cy.get(selectors.reminderName)
      .clear()
      .type(`Test${Math.ceil(Math.random() * 999).toString()}`);
    cy.wait(1000);
    cy.get(selectors.selectGroupInput).click();
    cy.wait(1000);
    cy.get(selectors.selectOption).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.selectPhoneInput).click();
    cy.wait(1000);
    cy.get(selectors.selectOption).eq(2).click();
    cy.wait(1000);
    cy.get(selectors.selectCallerInput).click();
    cy.wait(1000);
    cy.get(selectors.selectOption).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.openCalendar).click();
    cy.wait(1000);
    cy.get(selectors.createReminderBtn).eq(1).click();
    cy.wait(1000);
    cy.get(selectors.repeatInput).click();
    cy.wait(1000);
    cy.get(selectors.selectOption).eq(3).click();
  }

  SaveReminder() {
    cy.wait(1000);
    cy.get(selectors.createReminderBtn).click();
    cy.wait(1000);
    cy.get(selectors.createReminderBtn).eq(1).click();
  }
}

export default CreateReminder;
