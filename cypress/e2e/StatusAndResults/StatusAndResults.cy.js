/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import StatusAndResults from "../../ClassFiles/StatusAndResults/StatusAndResults";

const Login = new LogIn();
const StatusAndResult = new StatusAndResults();

describe("Status And Result", () => {
  it(
    "C176: Status And Result",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      StatusAndResult.OpenStatusAndResult();
    }
  );
});
