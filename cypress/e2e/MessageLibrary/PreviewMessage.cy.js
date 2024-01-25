/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CreateMessage from "../../ClassFiles/MessageLibrary/Message_Library";

const Login = new LogIn();
const TextMessage = new CreateMessage();

describe("Message Library", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
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
    "Preview Text Message",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      TextMessage.OpenMessageLibrary();
      TextMessage.PreviewTextMessage();
    }
  );

  it(
    "Preview Email Message",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      TextMessage.OpenMessageLibrary();
      TextMessage.PreviewEmailMessage();
    }
  );

  it(
    "Preview Voice Message",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      TextMessage.OpenMessageLibrary();
      TextMessage.PreviewVoiceMessage();
    }
  );
});
