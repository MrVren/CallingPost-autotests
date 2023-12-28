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
        runMode: 2,
        openMode: 2,
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
