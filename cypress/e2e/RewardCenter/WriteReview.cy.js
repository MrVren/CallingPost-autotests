/// <reference types="Cypress" />

import LogIn from "../../ClassFiles/Login/Login";
import RewardCenter from "../../ClassFiles/RewardCenter/RewardCenter";

const Login = new LogIn();
const Rewards = new RewardCenter();

describe("Reward Center", () => {
  it(
    "Write Review",
    {
      retries: {
        runMode: 2,
        openMode: 2,
      },
    },
    function () {
      Login.ValidLogin();
      Rewards.OpenRewardCenter();
      Rewards.OpenWriteReview();
      Rewards.EnterReview();
      Rewards.SubmitReview();
    }
  );
});
