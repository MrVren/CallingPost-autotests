/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CreateMessage from "../../ClassFiles/NewCommunication/Create_Message";

const Login = new LogIn();
const NewCommunication = new CreateMessage();

describe("New Communication", () => {
  before(() => {
    cy.clearLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it(
    "Edit Email Template",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      NewCommunication.OpenNewCommunication();
      // NewCommunication.EditTemplate();
    }
  );

});
