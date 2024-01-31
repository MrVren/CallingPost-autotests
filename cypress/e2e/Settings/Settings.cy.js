/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import Settings from "../../ClassFiles/Settings/Settings";

const Login = new LogIn();
const Setting = new Settings();

describe("Settings", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it(
    "Profile Icon",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Setting.OpenProfileIcon();
    }
  );

  it(
    "Profile Settings",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Setting.OpenProfileSettings();
    }
  );

  it(
    "Billing And Plans Settings",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Setting.OpenBilling();
    }
  );

  it(
    "Call-In Settings",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Setting.OpenCallIn();
    }
  );

  it(
    "System Settings",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Setting.OpenSystemSettings();
    }
  );

  it(
    "Password/Login",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Setting.OpenPasswords();
      Setting.EnterPassword();
    }
  );

  it(
    "Account Managers",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Setting.OpenAccountManagers();
    }
  );

  it(
    "Logout",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Setting.LogOut();
    }
  );
});
