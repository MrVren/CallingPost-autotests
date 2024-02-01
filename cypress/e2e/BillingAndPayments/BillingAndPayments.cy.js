/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import Billings from "../../ClassFiles/BillingAndPayments/BillingAndPayments";

const Login = new LogIn();
const Billing = new Billings();

describe("Billing And Payments", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it(
    "Add Bank Account",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Billing.OpenBilling();
      Billing.AddBankAccount();
    }
  );

  it(
    "Add New Payment Method",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Billing.OpenBilling();
      Billing.AddNewPaymentMethod();
    }
  );

  it(
    "Edit Billing And Payments",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Billing.OpenBilling();
      Billing.UpdatePaymentMethod();
    }
  );

  it(
    "Delete Billing And Payments",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Billing.OpenBilling();
      Billing.DeletePaymentMethod();
    }
  );

  it(
    "Billing History And Invoicing",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Billing.OpenBilling();
      Billing.ViewBillingHistory();
      Billing.OpenInvoice();
      Billing.BackToBilling();
    }
  );

  it.skip(
    "Change Plan",
    {
      tags: '@regression',
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Login.OpenDashboard();
      Billing.OpenBilling();
      Billing.ChangePlan();
      Billing.UpgradePlan();
    }
  );
});

