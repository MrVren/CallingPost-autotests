/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import GroupsAndContacts from "../../ClassFiles/GroupsAndContacts/Add_New_group";

const Login = new LogIn();
const GroupsAndContact = new GroupsAndContacts();

describe("Groups And Contacts", () => {
  it(
    "C165: All Contacts",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.OpenAllContacts();
    }
  );

  it(
    "Filter Contacts",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.AllContacts();
      GroupsAndContact.FilterGroup();
    }
  );

  it(
    "Search Contacts",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.AllContacts();
      GroupsAndContact.SearchContact();
    }
  );


  it(
    "Toggle Contact / Delete Icon",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.AllContacts();
      GroupsAndContact.ToggleContact();
      GroupsAndContact.DeleteIcon();
    }
  );
});
