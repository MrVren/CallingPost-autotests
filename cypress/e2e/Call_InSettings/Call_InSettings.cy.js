/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import Call_InSettings from "../../ClassFiles/Call_InSettings/Call_InSettings";

const Login = new LogIn();
const Call_In = new Call_InSettings();

describe("Call-In Settings", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  it(
    "Edit Call-In Settings",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Call_In.OpenCallIn();
      Call_In.EditNumber();
      Call_In.SaveNumber();
      Call_In.CheckNotification();
    }
  );
});
