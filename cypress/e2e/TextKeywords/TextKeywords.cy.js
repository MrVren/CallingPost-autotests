/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import TextKeywords from "../../ClassFiles/TextKeywords/TextKeywords";

const Login = new LogIn();
const TextKeyword = new TextKeywords();

describe("Text Keywords", () => {
  it(
    "Text Keywords",
    {
      retries: {
        runMode: 2,
        openMode: 2,
      },
    },
    function () {
      Login.ValidLogin();
      TextKeyword.OpenTextKeywords();
    }
  );
});
