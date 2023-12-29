/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CreateMessage from "../../ClassFiles/MessageLibrary/Message_Library";

const Login = new LogIn();
const VoiceMessage = new CreateMessage();

describe("Message Library", () => {
  it(
    "C169: Create Voice Message",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      VoiceMessage.OpenMessageLibrary();
      VoiceMessage.CreateVoiceMsg();
    }
  );
});
