/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import SystemSettings from "../../ClassFiles/SystemSettings/SystemSettings";

const Login = new LogIn();
const Setting = new SystemSettings();

describe("System Settings", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  it(
    "Edit System Settings",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Setting.OpenSystemSettings();
      Setting.EditCommunicationSettings();
      Setting.EditContactSettings();
      Setting.EditExtraSettings();
    }
  );
});
