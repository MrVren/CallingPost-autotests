/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import MessageLibrary from "../../ClassFiles/MessageLibrary/Message_Library";

const Login = new LogIn();
const Message = new MessageLibrary();

describe("Message Library", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  let name = `Text01${Math.ceil(Math.random() * 999).toString()}`;

  it(
    "Create Text Message",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Message.OpenMessageLibrary();
      Message.CreateTextMessage(name);
    }
  );

  it(
    "Edit Text Message",
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
      Message.OpenMessageLibrary();
      Message.EditTextMessage(name);
    }
  );

  it(
    "Delete Text Message",
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
      Message.OpenMessageLibrary();
      Message.DeleteMessage();
    }
  );
});
