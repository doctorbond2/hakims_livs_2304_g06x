import jwt from "jsonwebtoken";

export const generateAccessToken = async (userId) => {
  return jwt.sign({ userId }, process.env.JWT_ACCESS_KEY, { expiresIn: "10h" });
};
export const generateRefreshToken = async (userId) => {
  return jwt.sign({ userId }, process.env.JWT_REFRESH_KEY, {
    expiresIn: "10d",
  });
};
export const generateAccessAndRefreshToken = async (user) => {
  const accesstoken = jwt.sign(
    {
      userId: user.id,
    },
    "secret",
    {
      expiresIn: "1m",
    }
  );
  const refreshToken = jwt.sign(
    {
      userId: user.id,
    },
    "refreshSecret",
    {
      expiresIn: "28d",
    }
  );
  return {
    access: accesstoken,
    refresh: refreshToken,
  };
};
