/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import Dashboards from "../../ClassFiles/Dashboard/Dashboard";

const Login = new LogIn();
const Dashboard = new Dashboards();

describe("Dashboard", () => {

  it(
    "C157: Left Menu",
    {
      tags: '@smoke',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Dashboard.MenuBtn();
      Dashboard.MenuBtn();
    }
  );

  it(
    "C158: Notifications",
    {
      tags: '@smoke',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Dashboard.OpenNotifications();
    }
  );

  it(
    "C159: Profile Menu & Profile Settings",
    {
      tags: '@smoke',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Dashboard.OpenProfileSettings();
    }
  );

  it(
    "C160: System Settings",
    {
      tags: '@smoke',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Dashboard.OpenSystemSettings();
    }
  );

  it(
    "C161: Account Managers",
    {
      tags: '@smoke',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Dashboard.OpenAccountManagers();
    }
  );
});
