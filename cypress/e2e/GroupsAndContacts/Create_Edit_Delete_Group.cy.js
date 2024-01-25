/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import GroupsAndContacts from "../../ClassFiles/GroupsAndContacts/Add_New_group";

const Login = new LogIn();
const GroupsAndContact = new GroupsAndContacts();

describe("Groups And Contacts", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  let name = `TestGroup${Math.ceil(Math.random() * 999).toString()}`;
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
    "Create New Group",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.CreateGroup(name);
    }
  );

  it(
    "Edit Group",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.EditGroup();
    }
  );

  it(
    "Delete Group",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.DeleteGroup();
    }
  );
});