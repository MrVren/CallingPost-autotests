/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CreateMessage from "../../ClassFiles/MessageLibrary/Message_Library";

const Login = new LogIn();
const TextMessage = new CreateMessage();

describe("Message Library", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it(
    "Sort Filter Message",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      TextMessage.OpenMessageLibrary();
      TextMessage.SortFilterMessage();
    }
  );

  it(
    "Filter Voice Message",
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
      TextMessage.OpenMessageLibrary();
      TextMessage.FilterVoiceMessage();
    }
  );

  it(
    "Filter Text Message",
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
      TextMessage.OpenMessageLibrary();
      TextMessage.FilterTextMessage();
    }
  );

  it(
    "Filter Email Message",
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
      TextMessage.OpenMessageLibrary();
      TextMessage.FilterEmailMessage();
    }
  );
});
