/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Forgot_Password";

const Login = new LogIn();

describe("Login", () => {
  it(
    "Forgot Password",
    {
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
