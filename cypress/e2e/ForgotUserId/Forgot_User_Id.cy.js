/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Forgot_User_Id";

const Login = new LogIn();

describe("Login", () => {
  it.skip(
    "C163: Forgot UserId",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ForgotUserId();
    }
  );
});
