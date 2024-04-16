import User from "../models/user.model.js";
import { generateBothTokens as getTokens } from "../utils/helpers/tokenHelpers.js";
//TODO
//TOKENS ACCESS TOKEN JWT
// access - > jwt.sign
export const loginController = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: "No body submitted" });
  }

  const _userLoginDetails = req.body;

  try {
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: err.message });
  }
};
export const registerController = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: "No body submitted" });
  }
  const _user = req.body;
  try {
    const user = await User.create(_user);
    const token = getTokens(user);
    res.json(token);
  } catch (error) {
    registerErrorHandler(error, res, _user?.email);
  }
};
export const megaAuthTest = async (req, res) => {
  console.log("test auth");
  return res.status(200).json({
    medd: "hejsan",
  });
};
