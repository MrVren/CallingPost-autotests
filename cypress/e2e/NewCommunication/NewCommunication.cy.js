/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CreateMessage from "../../ClassFiles/NewCommunication/Create_Message";

const Login = new LogIn();
const NewCommunication = new CreateMessage();

describe("New Communication", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  before(() => {
    cy.clearLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it(
    "View Messages",
    {
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

  it(
    "Search Messages",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      NewCommunication.OpenNewCommunication();
      NewCommunication.ViewMessages();
      NewCommunication.SearchMessages();
    }
  );

  it(
    "Preview Messages",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      NewCommunication.OpenNewCommunication();
      NewCommunication.ViewMessages();
      NewCommunication.SearchMessages();
      NewCommunication.PreviewMessages();
    }
  );

  it(
    "Select Message",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      NewCommunication.OpenNewCommunication();
      NewCommunication.ViewMessages();
      NewCommunication.SelectMessage();
    }
  );

  it(
    "Schedule Message",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      NewCommunication.OpenNewCommunication();
      NewCommunication.ViewMessages();
      NewCommunication.SelectMessage();
      NewCommunication.SelectGroup();
      NewCommunication.ScheduleMessage();
      // what this test should do?
    }
  );
});
