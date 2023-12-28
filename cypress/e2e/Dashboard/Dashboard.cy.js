/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import Dashboards from "../../ClassFiles/Dashboard/Dashboard";

const Login = new LogIn();
const Dashboard = new Dashboards();

describe("Dashboard", () => {
  before("Login", () => {
    cy.clearLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it(
    "Left Menu",
    {
      retries: {
        runMode: 2,
        openMode: 2,
      },
    },
    function () {
      Login.ValidLogin();
      Dashboard.MenuBtn();
      Dashboard.MenuBtn();
    }
  );

  it(
    "Notifications",
    {
      retries: {
        runMode: 2,
        openMode: 2,
      },
    },
    function () {
      Login.OpenDashboard();
      Dashboard.OpenNotifications();
    }
  );

  it(
    "Profile Menu & Profile Settings",
    {
      retries: {
        runMode: 2,
        openMode: 2,
      },
    },
    function () {
      Login.OpenDashboard();
      Dashboard.OpenProfileSettings();
    }
  );

  it(
    "System Settings",
    {
      retries: {
        runMode: 2,
        openMode: 2,
      },
    },
    function () {
      Login.OpenDashboard();
      Dashboard.OpenSystemSettings();
    }
  );

 /*it(
    "Password/Login",
    {
      retries: {
        runMode: 2,
        openMode: 2,
      },
    },
    function () {
      Login.OpenDashboard();
      Dashboard.OpenPasswords();
      Dashboard.EnterPassword();
    }
  );*/

  it(
    "Account Managers",
    {
      retries: {
        runMode: 2,
        openMode: 2,
      },
    },
    function () {
      Login.OpenDashboard();
      Dashboard.OpenAccountManagers();
    }
  );
});
