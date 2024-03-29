/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import GroupsAndContacts from "../../ClassFiles/GroupsAndContacts/Add_New_group";

const Login = new LogIn();
const GroupsAndContact = new GroupsAndContacts();

describe("Groups And Contacts", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it(
    "Contact Profile",
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

      GroupsAndContact.ContactProfile();
      GroupsAndContact.EditPicture();
      GroupsAndContact.EditName();
      GroupsAndContact.ToggleActive();
      GroupsAndContact.EditPhoneNumber();
      GroupsAndContact.EditEmailAddress();
      GroupsAndContact.EditAddress();
      GroupsAndContact.ContactDelete();
      GroupsAndContact.SaveContact();
    }
  );
});
