/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import RewardCenter from "../../ClassFiles/Get$50/Get$50";

const Login = new LogIn();
const Rewards = new RewardCenter();

describe("Reward Center", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it(
    "Refer Email",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Rewards.OpenGet$50();
      Rewards.EnterEmail();
      Rewards.SendEmail();
    }
  );

  it(
    "Refer Multiple Emails",
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
      Rewards.OpenGet$50();
      Rewards.EnterMultipleEmails();
      Rewards.SendEmail();
    }
  );
});
