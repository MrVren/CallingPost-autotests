/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CreateMessage from "../../ClassFiles/NewCommunication/Create_Message";

const Login = new LogIn();
const EmailMessage = new CreateMessage();

describe("New Communication", () => {
  it(
    "C170: Create Email Message",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      EmailMessage.OpenNewCommunication();
      EmailMessage.SelectGroup();
      EmailMessage.CreateEmailMessage();
    }
  );
});
