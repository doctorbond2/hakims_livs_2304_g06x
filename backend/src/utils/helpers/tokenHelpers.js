import jwt from "jsonwebtoken";

export const generate_A_and_R_token = async (user) => {};
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
