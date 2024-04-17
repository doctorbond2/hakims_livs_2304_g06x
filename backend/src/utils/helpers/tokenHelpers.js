import jwt from "jsonwebtoken";
const secret_key = process.env.JWT_ACCESS_KEY;
const secret_refresh_key = process.env.JWT_REFRESH_KEY;
export const generateAccessToken = async (user) => {
  return jwt.sign(
    {
      userId: user.id,
    },
    secret_key,
    { expiresIn: "10h" }
  );
};
export const generateRefreshToken = async (user) => {
  return jwt.sign(
    {
      userId: user.id,
    },
    secret_refresh_key,
    {
      expiresIn: "10d",
    }
  );
};
export const generateAdminAcessToken = async (userId) => {
  return jwt.sign({ userId }, secret_key, { expiresIn: "10h" });
};
export const generateAdminRefreshToken = async (userId) => {
  return jwt.sign({ userId }, secret_refresh_key, {
    expiresIn: "10d",
  });
};
export const generateBothTokens = async (user) => {
  console.log(user.id);
  console.log("THE SECRET KEY IS: ", secret_key);
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
  console.log("ADMIN; ", user.id);
  console.log("THE SECRET KEY IS:", secret_key);
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
    adminAccess: admin_token,
    adminRefresh: admin_refresh_Token,
    access: accesstoken,
    refresh: refreshToken,
  };
};
