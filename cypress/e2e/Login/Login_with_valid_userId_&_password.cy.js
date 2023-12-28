/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";

const Login = new LogIn();

describe("Login", () => {
  it(
    "Login With Valid UserId & Password",
    {
      retries: {
        runMode: 2,
        openMode: 2,
      },
    },
    function () {
      Login.ValidLogin();
    }
  );
});
