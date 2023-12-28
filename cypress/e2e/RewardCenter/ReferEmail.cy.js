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
        runMode: 2,
        openMode: 2,
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
