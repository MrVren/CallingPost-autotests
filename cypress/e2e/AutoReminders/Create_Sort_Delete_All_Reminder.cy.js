/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CreateReminder from "../../ClassFiles/AutoReminders/Create_New_Reminder";

const Login = new LogIn();
const Reminder = new CreateReminder();

describe("Auto Reminders", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });


  it(
    "Create New Reminder",
    {
      tags: '@regression',
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
    "Sort Reminder",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Reminder.OpenAutoReminders();
      Reminder.SortFilters();
    }
  );

  it(
    "Delete All Reminders",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Reminder.OpenAutoReminders();
      Reminder.DeleteAllReminders();
    }
  );
});
