/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Forgot_Password";

const Login = new LogIn();

describe("Login", () => {
  it(
    "Forgot Password",
    {
      retries: {
        runMode: 2,
        openMode: 2,
      },
    },
    function () {
      Login.ForgotPassword();
    }
  );
});
