/// <reference types="Cypress" />

import selectors from "../../Selectors/AutoReminders/Create_New_Reminder";

class CreateReminder {

  reminderTestId = Math.ceil(Math.random() * 999)

  OpenAutoReminders() {
    cy.wait(5000);
    cy.get(selectors.mobileToolbarBtn).click({force:true});
    cy.wait(3000)
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
      .type(`Test${this.reminderTestId.toString()}`);
    cy.wait(1000);
    cy.get(selectors.selectGroupInput).click();
    cy.wait(1000);
    cy.get(selectors.selectOption).eq(0).click();
    cy.wait(1000);
    cy.get(selectors.selectPhoneInput).click();
    cy.wait(1000);
    cy.get(selectors.selectOption).eq(0).click();
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
    cy.wait(1000);
  }

  EditReminder() {
    cy.wait(1000);
    cy.get('.mat-card').eq(0)
      .children()
      .eq(1)
      .children()
      .eq(2)
      .children()
      .contains("Update")
      .click();


    cy.wait(1000);
    cy.get(selectors.reminderName).clear().type("Edited Reminder");
    cy.wait(1000);
  }

  DeleteReminder() {
    cy.wait(1000);
    cy.get(selectors.reminderTable)
      .children()
      .each((child) => {
        if (
          cy.get('.mat-card').contains(`Edited Reminder`)
        ) {
          cy.wrap(child)
            .children()
            .eq(1)
            .children()
            .eq(2)
            .children()
            .eq(1)
            .click();
          return false;
        }
      });
    cy.wait(1000);
    cy.get(selectors.confirmDelete).click();
    cy.wait(1000);
  }

  SortFilters() {
    cy.wait(1000);
    cy.get(selectors.selectInput).click();
    cy.wait(1000);
    cy.get(selectors.selectOption).eq(1).click();
    cy.wait(1000);
  }

  DeleteAllReminders() {
    cy.wait(1000);
    cy.get(selectors.deleteBtn).eq(-1).click();
    cy.wait(1000);
    cy.get(selectors.confirmDelete).click();
    cy.wait(1000);
  }
}


export default CreateReminder;
