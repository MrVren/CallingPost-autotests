/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CreateMessage from "../../ClassFiles/NewCommunication/Create_Message";

const Login = new LogIn();
const NewCommunication = new CreateMessage();

describe("New Communication", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it(
    "View Messages",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      NewCommunication.OpenNewCommunication();
      NewCommunication.ViewMessages();
    }
  );

  it.skip(
    "Search Messages",
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
      NewCommunication.OpenNewCommunication();
      NewCommunication.ViewMessages();
      NewCommunication.SearchMessages();
    }
  );

  it.skip(
    "Preview Messages",
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
      NewCommunication.OpenNewCommunication();
      NewCommunication.ViewMessages();
      NewCommunication.SearchMessages();
      NewCommunication.PreviewMessages();
    }
  );

  it.skip(
    "Select Message",
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
      NewCommunication.OpenNewCommunication();
      NewCommunication.ViewMessages();
      NewCommunication.SelectMessage();
    }
  );

  it(
    "Schedule Message",
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
      NewCommunication.OpenNewCommunication();
      NewCommunication.ViewMessages();
      NewCommunication.SelectMessage();
      NewCommunication.SelectGroup();
      NewCommunication.ScheduleMessage();
    }
  );
});
