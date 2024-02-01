/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import GroupsAndContacts from "../../ClassFiles/GroupsAndContacts/Add_New_group";

const Login = new LogIn();
const GroupsAndContact = new GroupsAndContacts();

describe("Groups And Contacts", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  it.skip(
    "Select Group / New Communication",
    {
      tags: '@regression',
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
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.AddContact();
    }
  );

  it(
    "Filter Contact",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.FilterGroup()
    }
  );

  it(
    "Search Contact",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.SelectGroup();
      GroupsAndContact.SearchGroup();
    }
  );

  it(
    "Edit Text Keyword",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.SelectGroup();
      GroupsAndContact.EditTextKeyword();
    }
  );
});
