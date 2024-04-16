import User from "../models/user.model.js";
import {
  generateBothTokens,
  generateBothTokens as getTokens,
} from "../utils/helpers/tokenHelpers.js";
import { comparePasswords } from "../utils/hooks/user.hooks.js";

//TODO
//TOKENS ACCESS TOKEN JWT
// access - > jwt.sign
export const loginController = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: "No body submitted" });
  }
  const _userLoginDetails = req.body;
  const { password, username } = _userLoginDetails;
  console.log(_userLoginDetails);
  if (!password || !username) {
    return res.status(400).json({ error: "Bad login" });
  }
  try {
    const user = await User.findOne({ username: username });
    console.log("2:", password, user.password, user);
    const comparison = comparePasswords(password, user.password);
    if (comparison) {
      const userResponse = user.toObject();
      delete userResponse.password;
      delete userResponse.order;
      const tokens = await getTokens(user);
      userResponse.tokens = tokens;
      res.status(200).json(userResponse);
    }
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: err.message });
  }
};
export const logoutController = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: "No body submitted" });
  }
  res.status(200).send("Logged out:(");
};
export const registerController = async (req, res) => {
  console.log("hi");
  if (!req.body) {
    return res.status(400).json({ error: "No body submitted" });
  }
  const _user = req.body;
  try {
    const user = await User.create(_user);
    const tokens = await getTokens(user);
    res.json(tokens);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const adminLogin = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: "No body submitted" });
  }
  const _adminLoginDetails = req.body;
  try {
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: err.message });
  }
};
export const megaAuthTest = async (req, res) => {
  console.log("test auth");
  return res.status(200).json({
    medd: "hejsan",
  });
};
