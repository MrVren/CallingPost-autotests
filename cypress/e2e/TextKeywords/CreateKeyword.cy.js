/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import TextKeywords from "../../ClassFiles/TextKeywords/TextKeywords";

const Login = new LogIn();
const TextKeyword = new TextKeywords();

describe("Text Keywords", () => {

  afterEach(() => {
    // Cleanup code: Delete the created keyword through the UI
    TextKeyword.DeleteKeyword(); 
  });

  it.skip(
    "C153: Create Keyword",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      TextKeyword.OpenTextKeywords();
      TextKeyword.CreateKeyword();
      TextKeyword.EnterKeywordDetails();
      TextKeyword.SaveKeyword();
    }
  );
});
