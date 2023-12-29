/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";

const Login = new LogIn();

describe("Login", () => {
  it(
    "C166: Login With Valid UserId & Password",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
    }
  );
});
