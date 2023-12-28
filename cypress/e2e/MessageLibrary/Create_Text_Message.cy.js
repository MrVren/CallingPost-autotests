/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CreateMessage from "../../ClassFiles/MessageLibrary/Message_Library";

const Login = new LogIn();
const TextMessage = new CreateMessage();

describe("Message Library", () => {
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
      TextMessage.OpenMessageLibrary();
      TextMessage.CreateTextMessage();
    }
  );
});
