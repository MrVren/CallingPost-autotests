/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import GroupsAndContacts from "../../ClassFiles/GroupsAndContacts/Add_New_group";

const Login = new LogIn();
const GroupsAndContact = new GroupsAndContacts();

describe("Groups And Contacts More Options", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  it(
    "Print",
    {
      tags: '@smoke',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.Print();
    }
  );

  it(
    "Export",
    {
      tags: '@smoke',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.Export();
    }
  );

  it(
    "Edit Group Name",
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
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.EditGroupName();
    }
  );

  it(
    "Deactive All Contacts",
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
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.DeactivateContacts();
    }
  );

  it(
    "Activate All Contacts",
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
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.ActivateContacts();
    }
  );

  it(
    "Send Sms Opt-In Email",
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
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.SmsOptEmail();
    }
  );

  it(
    "Send Sms Opt-In Text",
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
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.SmsOptText();
    }
  );

  it(
    "Export Sms Not Opted-In",
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
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.ExportSmsNonOpt();
    }
  );

  it(
    "Export Bad Contacts",
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
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.ExportBadContacts();
    }
  );

  it(
    "Remove Bad Numbers",
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
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.RemoveBadNumbers();
    }
  );

  it(
    "Delete All Contacts",
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
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.DeleteAllContacts();
    }
  );

  it(
    "Delete Group",
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
      GroupsAndContact.DeleteGroup();
    }
  );
});
