/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Forgot_Password";

const Login = new LogIn();

describe("Login", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  it(
    "Cancel Request Password",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.CancelRequest();
    }
  );
});
