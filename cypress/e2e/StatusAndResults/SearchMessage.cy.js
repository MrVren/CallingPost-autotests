/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import StatusAndResults from "../../ClassFiles/StatusAndResults/StatusAndResults";

const Login = new LogIn();
const StatusAndResult = new StatusAndResults();

describe("Status And Result", () => {
  it(
    "Search Message",
    {
      retries: {
        runMode: 2,
        openMode: 2,
      },
    },
    function () {
      Login.ValidLogin();
      StatusAndResult.OpenStatusAndResult();
      StatusAndResult.SearchMessage();
    }
  );
});
