/// <reference types="Cypress" />

import CreateAccount from "../../ClassFiles/CreateAccount/Create_Account";

const Registration = new CreateAccount();

describe("Registration", () => {
  it(
    "Create Free Account",
    {
      retries: {
        runMode: 2,
        openMode: 2,
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
