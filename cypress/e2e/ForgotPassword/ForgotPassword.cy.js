/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Forgot_Password";

const Login = new LogIn();

describe("Login", () => {
  it.skip(
    "C162: Forgot Password",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ForgotPassword();
    }
  );
});
