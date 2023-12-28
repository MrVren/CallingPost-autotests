/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CreateReminder from "../../ClassFiles/AutoReminders/Create_New_Reminder";

const Login = new LogIn();
const Reminder = new CreateReminder();

describe("Auto Reminders", () => {
  it(
    "Create New Reminder",
    {
      retries: {
        runMode: 2,
        openMode: 2,
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
});
