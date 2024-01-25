/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import GroupsAndContacts from "../../ClassFiles/GroupsAndContacts/Add_New_group";

const Login = new LogIn();
const GroupsAndContact = new GroupsAndContacts();

describe("Groups And Contacts", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
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
    "Create New Group Add Contacts Later",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.CreateGroup()
    }
  );

  it(
    "Create New Group Add Contacts",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.CreateGroupAdd();
    }
  );
});
