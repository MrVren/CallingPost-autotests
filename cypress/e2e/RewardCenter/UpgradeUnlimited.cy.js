/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import RewardCenter from "../../ClassFiles/RewardCenter/RewardCenter";

const Login = new LogIn();
const Rewards = new RewardCenter();

describe("Reward Center", () => {
  it(
    "Upgrade Unlimited",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Rewards.OpenRewardCenter();
      Rewards.OpenUpgradeUnlimited();
      Rewards.SelectContacts();
      Rewards.CreditPricing();
      // Rewards.UpgradePremium();
    }
  );
});
