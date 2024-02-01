/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import Passwords from "../../ClassFiles/PasswordLogin/PasswordLogin";

const Login = new LogIn();
const Password = new Passwords();

describe("Settings", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  it(
    "Password/Login",
    {
      tags: '@smoke',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Password.OpenPasswords();
      Password.EnterPassword();
      Password.OpenExternalLinks();
    }
  );
});


