/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import AccountsManagers from "../../ClassFiles/AccountManagers/AccountManagers";

const Login = new LogIn();
const AccountsManager = new AccountsManagers();

describe("Account Managers", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  it(
    "Edit Account Managers",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      AccountsManager.OpenAccountManagers();
      AccountsManager.WithoutEmailInvite();
      AccountsManager.CancelSetting();
      AccountsManager.InviteAccountManager();
      AccountsManager.CancelInvite();
    }
  );
});
