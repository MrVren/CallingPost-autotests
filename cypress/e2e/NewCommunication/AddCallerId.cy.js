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
    "Add Caller Id",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      NewCommunication.OpenNewCommunication();
      NewCommunication.AddCallerId();
    }
  );
});
