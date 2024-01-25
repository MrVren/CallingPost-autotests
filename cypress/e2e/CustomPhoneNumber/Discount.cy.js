/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import CustomNumbers from "../../ClassFiles/CustomPhoneNumber/CustomPhoneNumber";

const Login = new LogIn();
const CustomNumber = new CustomNumbers();

describe("Custom Phone Number", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  it(
    "Discounts",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      CustomNumber.OpenCustomNumbers();
      CustomNumber.AddNewPhoneNumber();
      CustomNumber.SelectPreferredNumber();
      CustomNumber.SelectDiscounts();
    }
  );
});
