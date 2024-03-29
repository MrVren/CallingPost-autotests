/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CreateMessage from "../../ClassFiles/NewCommunication/Create_Message";

const Login = new LogIn();
const VoiceMessage = new CreateMessage();

describe("New Communication", () => {
  it(
    "C172: Create Voice Message",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      VoiceMessage.OpenNewCommunication();
      VoiceMessage.SelectGroup();
      VoiceMessage.CreateVoiceMsg();
    }
  );
});
