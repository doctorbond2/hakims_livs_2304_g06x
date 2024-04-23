import User from "../models/user.model.js";
import {
  generateBothTokens,
  generateBothTokens as getTokens,
  generateBothAdminTokens as getAdminTokens,
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
      const tokens = user.admin
        ? await getAdminTokens(user)
        : await getTokens(user);
      if (tokens) {
        console.log("TOOOOOKEEEENS");
        const userResponse = user.toObject();
        delete userResponse.password;
        userResponse.tokens = tokens;
        console.log("USERRESPONSE:", userResponse);
        res.status(200).json(userResponse);
      }
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
  res.status(200).json("Logged out");
};
export const registerController = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: "No body submitted" });
  }
  const _user = req.body;
  console.log(_user);
  try {
    const user = await User.create(_user);
    const tokens = req.admin
      ? await getAdminTokens(user)
      : await getTokens(user);
    res.json(tokens);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};
export const adminLoginController = async (req, res) => {
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
