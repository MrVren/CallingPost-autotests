/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";

const Login = new LogIn();

describe("Login", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  it(
    "Login With Incorrect UserId & Incorrect Password",
    {
      tags: '@smoke',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.LoginWithIncorrectUsernameAndPassword();
    }
  );
});
