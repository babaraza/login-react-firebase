import { atom } from "recoil";

const userState = atom({
  key: "userState",
  default: null,
  dangerouslyAllowMutability: true,
});

const customMessageState = atom({
  key: "customMessageState",
  default: "",
});

export { userState, customMessageState };
