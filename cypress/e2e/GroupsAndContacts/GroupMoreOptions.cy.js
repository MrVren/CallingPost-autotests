/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import GroupsAndContacts from "../../ClassFiles/GroupsAndContacts/Add_New_group";

const Login = new LogIn();
const GroupsAndContact = new GroupsAndContacts();

describe("Groups And Contacts More Options", () => {
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
    "Print",
    {
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
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.Export();
    }
  );

  it(
    "Edit Group Name",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.EditGroupName();
    }
  );

  it(
    "Deactive All Contacts",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.DeactivateContacts();
    }
  );

  it(
    "Activate All Contacts",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.ActivateContacts();
    }
  );

  it(
    "Send Sms Opt-In Email",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.SmsOptEmail();
    }
  );

  it(
    "Send Sms Opt-In Text",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.SmsOptText();
    }
  );

  it(
    "Export Sms Not Opted-In",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.ExportSmsNonOpt();
    }
  );

  it(
    "Export Bad Contacts",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.ExportBadContacts();
    }
  );

  it(
    "Remove Bad Numbers",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.RemoveBadNumbers();
    }
  );

  it(
    "Delete All Contacts",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.OpenDashboard();
      GroupsAndContact.OpenGroups();
      GroupsAndContact.SelectLastGroup();
      GroupsAndContact.DeleteAllContacts();
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
