/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import GroupsAndContacts from "../../ClassFiles/GroupsAndContacts/Add_New_group";

const Login = new LogIn();
const GroupsAndContact = new GroupsAndContacts();

describe("Groups And Contacts", () => {
  // @smoke
  it(
    "C164: Add New Group",
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
      GroupsAndContact.CreateGroup()
    }
  );
});
