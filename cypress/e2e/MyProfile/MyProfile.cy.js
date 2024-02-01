/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import MyProfile from "../../ClassFiles/MyProfile/MyProfile";

const Login = new LogIn();
const Profile = new MyProfile();

describe("My Profile", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it(
    "Edit My Profile",
    {
      tags: '@smoke',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Profile.OpenProfileSettings();
      Profile.EditPicture();
      Profile.EditProfileDetails();
      Profile.EditPhoneNumbers();
      Profile.EditEmails();
      Profile.EditAddress();
      Profile.SaveProfile();
    }
  );
});
