import User from "../models/user.model";

//TODO
//TOKENS ACCESS TOKEN JWT
// access - > jwt.sign
export const loginUser = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: "No body submitted" });
  }
  const _user = req.body;
};
export const registerUser = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ error: "No body submitted" });
  }
  const _user = req.body;
  try {
    const user = await User.create(_user);
    const token = generateAccessAndRefreshToken(user);
    res.json(token);
  } catch (error) {
    registerErrorHandler(error, res, _user?.email);
  }
};
