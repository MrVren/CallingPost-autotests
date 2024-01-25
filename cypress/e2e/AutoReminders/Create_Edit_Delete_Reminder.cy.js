/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CreateReminder from "../../ClassFiles/AutoReminders/Create_New_Reminder";

const Login = new LogIn();
const Reminder = new CreateReminder();

describe("Auto Reminders", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  before(() => {
    cy.clearLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });
//  @smoke 
  it(
    "Create New Reminder",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Reminder.OpenAutoReminders();
      Reminder.OpenCreateReminder();
      Reminder.EnterReminderDetails();
      Reminder.SaveReminder();
    }
  );

  it(
    "Edit Reminder",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      Reminder.OpenAutoReminders();
      Reminder.EditReminder();
      Reminder.SaveReminder();
    }
  );

  it(
    "Delete Reminder",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      Reminder.OpenAutoReminders();
      Reminder.DeleteReminder();
    }
  );
});
