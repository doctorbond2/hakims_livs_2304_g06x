import User from "../models/user.model.js";

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
