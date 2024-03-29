/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import Footers from "../../ClassFiles/Footer/Footer";

const Login = new LogIn();
const Footer = new Footers();

describe("Footer", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  it(
    "Help Center",
    {
      tags: '@smoke',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Footer.OpenHelpCenter();
    }
  );
});
