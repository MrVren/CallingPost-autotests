/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";

const Login = new LogIn();

describe("Login", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  it(
    "Login With UserId & Incorrect Password",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.LoginWithIncorrectPassword();
    }
  );
});
