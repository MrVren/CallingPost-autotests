/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import AccountOverview from "../../ClassFiles/AccountOverview/AccountOverview";

const Login = new LogIn();
const Overview = new AccountOverview();

describe("Account Overview", () => {
    // @regression
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it(
    "Open Premium Plan",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Overview.OpenPremiumPlan();
    }
  );

  it(
    "Open My Profile",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Overview.OpenMyProfile();
    }
  );

  it(
    "Open My Setting",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Overview.OpenMySettings();
    }
  );

  it(
    "Open My Billing",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Overview.OpenMyBilling();
    }
  );
});
