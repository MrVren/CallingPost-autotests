/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import RewardCenter from "../../ClassFiles/RewardCenter/RewardCenter";

const Login = new LogIn();
const Rewards = new RewardCenter();

describe("Reward Center", () => {
  it(
    "Refer Email",
    {
      retries: {
        runMode: 0,
        openMode: 0,
      },
    },
    function () {
      Login.ValidLogin();
      Rewards.OpenRewardCenter();
      Rewards.OpenReferFriend();
      Rewards.EnterEmail();
      Rewards.SendEmail();
    }
  );
});