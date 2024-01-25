/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CreateMessage from "../../ClassFiles/MessageLibrary/Message_Library";

const Login = new LogIn();
const Message = new CreateMessage();

describe("Message Library", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  let name = `Voice01${Math.ceil(Math.random() * 999).toString()}`;

  before("Login", () => {
    cy.clearLocalStorage();
    Login.ValidLogin();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it(
    "Create Voice Message",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Message.OpenMessageLibrary();
      Message.CreateVoiceMsg(name);
    }
  );

  it(
    "Edit Voice Message",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      Message.OpenMessageLibrary();
      Message.EditVoiceMessage(name);
    }
  );

  it(
    "Delete Voice Message",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      Message.OpenMessageLibrary();
      Message.DeleteMessage();
    }
  );
});
