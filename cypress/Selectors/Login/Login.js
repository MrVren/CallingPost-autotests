/// <reference types="Cypress" />
export default {
  usernameInput: 'input[data-placeholder="Type your user ID"]',
  passwordInput: 'input[data-placeholder="Type your password"]',
  loginBtn: "button.login-button-border-radius",
  tftBtn: 'button[color="primary"]', // use eq 1
  invalidAlert: "div.alert-danger.ng-star-inserted",

  //   Forgot User Id
  forgotUserIdBtn: 'a[routerlink="/recover-user-id"]',
  emailInput: 'input[type="text"]',
  sendRecoveryEmailBtn: 'button[color="primary"]', // use eq 1
  incorrectEmailAlert: "snack-bar-container",

  //   Forgot Password
  forgotPasswordBtn: 'a[routerlink="/recover-user-password"]',
};
