/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import RecentCommunications from "../../ClassFiles/RecentCommunications/RecentCommunication";

const Login = new LogIn();
const RecentCommunication = new RecentCommunications();

describe("Recent Communications", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it(
    "Open Create New Communication Page",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      RecentCommunication.OpenCreateNewPage();
    }
  );

  it(
    "See All Communications",
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
      RecentCommunication.SeeAllCommunications();
    }
  );

  it(
    "Get $50 Credit",
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
      RecentCommunication.OpenGetCredit();
      RecentCommunication.EnterEmail();
      RecentCommunication.SendEmail();
    }
  );

  it(
    "Earn Rewards",
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
      RecentCommunication.OpenEarnRewards();
    }
  );

  it(
    "PDF Guide",
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
      RecentCommunication.GetPdfGuide();
    }
  );

  it(
    "Download App",
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
      RecentCommunication.DownloadApp();
    }
  );

  it(
    "Communication Detail Page",
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
      RecentCommunication.OpenCommunicationDetails();
    }
  );
});
