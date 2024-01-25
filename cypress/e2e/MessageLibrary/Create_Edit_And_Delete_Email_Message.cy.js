/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CreateMessage from "../../ClassFiles/MessageLibrary/Message_Library";

const Login = new LogIn();
const Message = new CreateMessage();

describe("Message Library", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  let name = `Email01${Math.ceil(Math.random() * 999).toString()}`;

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
    "Create Email Message",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Message.OpenMessageLibrary();
      Message.CreateEmailMessage(name);
    }
  );

  it(
    "Edit Email Message",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      Message.OpenMessageLibrary();
      Message.EditEmailMessage(name);
    }
  );

  it(
    "Delete Email Message",
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