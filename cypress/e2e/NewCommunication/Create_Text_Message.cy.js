/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CreateMessage from "../../ClassFiles/NewCommunication/Create_Message";

const Login = new LogIn();
const TextMessage = new CreateMessage();

describe("New Communication", () => {
  it(
    "Create Text Message",
    {
      retries: {
        runMode: 2,
        openMode: 2,
      },
    },
    function () {
      Login.ValidLogin();
      TextMessage.OpenNewCommunication();
      TextMessage.SelectGroup();
      TextMessage.CreateTextMessage();
    }
  );
});
