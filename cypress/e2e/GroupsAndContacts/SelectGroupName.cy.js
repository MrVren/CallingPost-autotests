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
  
  it.skip(
    "Select Group / New Communication",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.SelectGroup();
      GroupsAndContact.NewCommunication();
    }
  );

  it(
    "Add Contact",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.AddContact();
    }
  );

  it(
    "Filter Contact",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.FilterGroup()
    }
  );

  it(
    "Search Contact",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.SelectGroup();
      GroupsAndContact.SearchGroup();
    }
  );

  it(
    "Edit Text Keyword",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.SelectGroup();
      GroupsAndContact.EditTextKeyword();
    }
  );
});
