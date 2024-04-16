import jwt from "jsonwebtoken";
const secret_key = process.env.JWT_ACCESS_KEY;
const secret_refresh_key = process.env.JWT_REFRESH_KEY;
export const generateAccessToken = async (userId) => {
  return jwt.sign({ userId }, process.env.JWT_ACCESS_KEY, { expiresIn: "10h" });
};
export const generateRefreshToken = async (userId) => {
  return jwt.sign({ userId }, process.env.JWT_REFRESH_KEY, {
    expiresIn: "10d",
  });
};
export const generateAdminAcessToken = async (userId) => {
  return jwt.sign({ userId }, process.env.JWT_ACCESS_KEY, { expiresIn: "10h" });
};
export const generateAdminRefreshToken = async (userId) => {
  return jwt.sign({ userId }, process.env.JWT_REFRESH_KEY, {
    expiresIn: "10d",
  });
};
export const generateBothTokens = async (user) => {
  console.log(user.id);
  const accesstoken = jwt.sign(
    {
      userId: user.id,
    },
    secret_key,
    {
      expiresIn: "1m",
    }
  );
  const refreshToken = jwt.sign(
    {
      userId: user.id,
    },
    secret_refresh_key,
    {
      expiresIn: "28d",
    }
  );
  return {
    access: accesstoken,
    refresh: refreshToken,
  };
};
export const generateBothAdminTokens = async (user) => {
  console.log(user.id);
  const admin_token = jwt.sign(
    {
      userId: user.id,
    },
    secret_key,
    {
      expiresIn: "1m",
    }
  );
  const admin_refresh_Token = jwt.sign(
    {
      userId: user.id,
    },
    secret_refresh_key,
    {
      expiresIn: "28d",
    }
  );
  return {
    adminAccess: admin_token,
    adminRefresh: admin_refresh_Token,
  };
};
const verifyToken = async (req, res, token, secret_key, next) => {
  try {
    const verifiedToken = jwt.verify(token, secret_key);
    if (!verifiedToken) {
      return res.status(400).send("Access denied");
    }
    req.decodedToken = verifiedToken;
    next();
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
};
const verifyRefreshToken = async (req, res, token, secret_key, next) => {
  try {
    const verifiedRefreshToken = jwt.verify(token, secret_key);
    if (!verifiedRefreshToken) {
      return res.status(400).send("Access denied");
    }
    req.decodedRefreshToken = verifiedRefreshToken;
    next();
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
};
