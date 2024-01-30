/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CreateMessage from "../../ClassFiles/NewCommunication/Create_Message";

const Login = new LogIn();
const TextMessage = new CreateMessage();

describe("New Communication", () => {
  it(
    "C171: Create Text Message",
    {
      retries: {
        runMode: 0,
        openMode: 0,
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
