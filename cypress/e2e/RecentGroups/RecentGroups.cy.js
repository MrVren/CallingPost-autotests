/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import RecentGroups from "../../ClassFiles/RecentGroups/RecentGroups";

const Login = new LogIn();
const RecentGroup = new RecentGroups();

describe("Recent Groups", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it(
    "Create New Group",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      RecentGroup.CreateNewGroup();
    }
  );

  it(
    "See All Groups",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      RecentGroup.SeeAllGroups();
    }
  );

  it(
    "Open Group",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      RecentGroup.OpenGroup();
    }
  );
});
