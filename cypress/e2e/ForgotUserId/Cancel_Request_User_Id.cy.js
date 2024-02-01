/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Forgot_User_Id";

const Login = new LogIn();

describe("Login", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  it(
    "Cancel Request UserId",
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
