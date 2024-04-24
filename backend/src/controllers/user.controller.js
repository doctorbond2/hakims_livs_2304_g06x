import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
export async function createUser(req, res) {
  if (!req.body) {
    return res.status(400).json({ message: "Request BODY not found" });
  }
  try {
    let _user = new User(req.body);
    let result = await _user.save();
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
}

export async function getAllUsers(req, res) {
  try {
    let users = await User.find();
    if (users && users.length > 0) {
      res.status(200).json(users);
    } else {
      res.status(200).json({ message: "No users found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
}
export async function getAdminInfoWithToken(req, res) {
  const { newAccessToken, userId, accessToken, refreshToken } = req;
  console.log("NEW:", newAccessToken);
  let token = "";
  if (accessToken) {
    token = accessToken;
  }
  if (newAccessToken) {
    token = newAccessToken;
  }
  console.log("Token IS: ", token);
  try {
    const _user = await User.findById(userId, {
      username: 1,
      firstName: 1,
      lastName: 1,
    });
    if (_user) {
      let userResponse = _user.toObject();
      userResponse = {
        ...userResponse,
        token: token,
        refreshToken: refreshToken,
      };
      res.status(200).json(userResponse);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
}
export async function getUserInfoWithToken(req, res) {
  const { newAccessToken, userId, accessToken, refreshToken } = req;
  console.log("NEW:", newAccessToken);
  let token = "";
  let adminToken = null;
  let adminRefresh = null;
  if (accessToken) {
    token = accessToken;
  }
  if (newAccessToken) {
    token = newAccessToken;
  }
  if (req.adminAccessToken) {
    adminToken = req.adminAccessToken;
  }
  if (req.adminRefreshToken) {
    adminRefresh = req.adminRefreshToken;
  }
  if (req.newAdminAccessToken) {
    adminToken = req.newAdminAccessToken;
  }
  console.log("Token IS: ", token);
  try {
    const _user = await User.findById(userId, {
      username: 1,
      firstName: 1,
      lastName: 1,
    });
    if (_user && adminToken) {
      let adminResponse = _user.toObject();
      adminResponse = {
        ...adminResponse,
        token,
        refreshToken,
        adminToken,
        adminRefresh,
      };
      return res.status(200).json(adminResponse);
    } else if (_user) {
      let userResponse = _user.toObject();
      userResponse = {
        ...userResponse,
        token,
        refreshToken,
      };
      res.status(200).json(userResponse);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
}
