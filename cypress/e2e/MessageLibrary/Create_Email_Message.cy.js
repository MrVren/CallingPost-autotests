/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CreateMessage from "../../ClassFiles/MessageLibrary/Message_Library";

const Login = new LogIn();
const EmailMessage = new CreateMessage();

describe("Message Library", () => {
  it(
    "C167: Create Email Message",
    {
       retries: {
         runMode: 0,
         openMode: 0,
       },
     },
    function () {
      Login.ValidLogin();
      EmailMessage.OpenMessageLibrary();
      EmailMessage.CreateEmailMessage();
    }
  );
});
