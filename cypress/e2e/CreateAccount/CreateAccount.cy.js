/// <reference types="Cypress" />

import CreateAccount from "../../ClassFiles/CreateAccount/Create_Account";

const Registration = new CreateAccount();

describe("Registration", () => {
  it(
    "Create Free Account",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Registration.OpenRegistration();
      Registration.AddPhoneNumber();
      Registration.AddPin();
      Registration.AddEmail();
      Registration.AddName();
      Registration.SelectOrganization();
      Registration.OpenPlans();
    }
  );
});
