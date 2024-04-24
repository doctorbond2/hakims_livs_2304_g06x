import { compareAdminKeys } from "../utils/helpers/apiHelpers.js";
import jwt from "jsonwebtoken";
import {
  generateAccessToken,
  generateAdminAcessToken,
  generateBothAdminTokens,
} from "../utils/helpers/tokenHelpers.js";
const secret_key = process.env.JWT_ACCESS_KEY;
const secret_refresh_key = process.env.JWT_REFRESH_KEY;
export async function tokenTestOne(req, res, next) {
  const user = req.body;
  try {
    const newToken = await generateAccessToken(user);
    req.token = newToken;
    next();
  } catch (err) {
    console.log(err);
    return res.send("wrong test 1");
  }
}
export async function tokenTestTwo(req, res, next) {
  try {
    const decoded = jwt.verify(req.token, secret_key);
    if (decoded) {
      res.send(decoded);
    }
  } catch (err) {
    return res.send("wrong test 2");
  }
}
export async function tokenTestThree(req, res, next) {
  try {
    const decoded = jwt.verify(req.token, secret_key);
    if (decoded) {
      res.send(decoded);
    }
  } catch (err) {
    return res.send("wrong test 2");
  }
}

export async function simpleTokenCheck(req, res, next) {
  const authorizationHeader = req.header("Authorization") || "";
  const accessToken = authorizationHeader.split(" ")?.[1] || "";
  if (!accessToken) {
    return res.status(401).json({ error: "I dont think you are logged in." });
  }
  next();
}
export async function authTokenMiddleware(req, res, next) {
  const accessToken = req.decodedAccessToken;
  const refreshToken = req.decodedRefreshToken;
  try {
    if (!refreshToken && !accessToken) {
      return res.status(401).json({ message: "Invalid access, please login." });
    }
    if (accessToken) {
      req.accessToken = accessToken;
      next();
    }
    if (refreshToken && !accessToken) {
      accessToken = await generateAccessToken();
      req.accessToken = accessToken;
      req.refreshToken = refreshToken;
      next();
    }
  } catch (err) {
    console.log(err.message);
    next(err);
  }
}

export function authKeyMiddleware(req, res, next) {
  const { authorization: key } = req.headers;
  if (compareAdminKeys(key)) {
    req.admin = true;

    next();
  } else {
    return res.send("Bloop bloop what u tryna do bloop bloop bloop");
  }
}
export const verifyAccessTokenMiddleware = async (req, res, next) => {
  const authorizationHeader = req.header("Authorization") || "";
  const accessToken = authorizationHeader.split(" ")?.[1] || "";
  console.log("ACCESSTOKEN", accessToken);
  console.log("THE SECRET KEY IS:", secret_key);
  console.log(typeof accessToken);
  try {
    if (accessToken) {
      const decodedAccessToken = jwt.verify(accessToken, secret_key);
      req.decodedAccessToken = decodedAccessToken;
      next();
    } else {
      throw new Error("Invalid token");
    }
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      console.log("expired!");
      const newAccessToken = generateAccessToken();
      req.newAccessToken = newAccessToken;
      next();
    } else {
      console.log(err);
      return res.status(401).send("Invalid token");
    }
  }
};
export const verifyBothAdminTokensMiddleware = async (req, res, next) => {
  const adminAccessHeader = req.header("Admin-Token") || "";
  if (!adminAccessHeader) {
    return res.status(401).json("Not authorized!");
  }
  const adminAccessToken = adminAccessHeader.split(" ")?.[1] || "";

  const adminRefreshHeader = req.header("Admin-Refresh");
  if (!adminRefreshHeader) {
    return res.status(401).json("Not authorized!");
  }
  const adminRefreshToken = adminRefreshHeader.split(" ")?.[1] || "";
  if (!adminAccessToken && !adminRefreshToken) {
    return res.status(401).json({ message: "Invalid access, please login." });
  }
  try {
    const decodedAdminAccessToken = jwt.verify(adminAccessToken, secret_key);
    const { userId } = decodedAdminAccessToken;
    req.adminAccessToken = adminAccessToken;
    req.adminRefreshToken = adminRefreshToken;
    req.userId = userId;
    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError || jwt.JsonWebTokenError) {
      try {
        const decodedAdminRefreshToken = jwt.verify(
          adminRefreshToken,
          secret_refresh_key
        );
        const { userId } = decodedAdminRefreshToken;
        const newAdminAccessToken = generateAdminAcessToken(userId);
        req.newAdminAccessToken = newAdminAccessToken;
        req.adminRefreshToken = adminRefreshToken;
        req.userId = userId;
        next();
      } catch (refreshError) {
        next(refreshError);
      }
    } else {
      console.error("Error verifying tokens:", err.message);
      return res
        .status(401)
        .send("Invalid tokens, probably need to login again ese");
    }
  }
};
export const verifyBothTokensMiddleware = async (req, res, next) => {
  const authorizationHeader = req.header("Authorization") || "";
  if (!authorizationHeader) {
    return res.status(401).json("Not authorized!");
  }
  const accessToken = authorizationHeader.split(" ")?.[1] || "";

  const refreshHeader = req.header("Refresh-Token");
  if (!refreshHeader) {
    return res.status(401).json("Not authorized!");
  }
  const refreshToken = refreshHeader.split(" ")?.[1] || "";

  if (!accessToken && !refreshToken) {
    return res.status(401).json({ message: "Invalid access, please login." });
  }

  try {
    const decodedAccessToken = jwt.verify(accessToken, secret_key);
    const { userId } = decodedAccessToken;
    req.userId = userId;
    req.refreshToken = refreshToken;
    req.accessToken = accessToken;
    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError || jwt.JsonWebTokenError) {
      try {
        const decodedRefreshToken = jwt.verify(
          refreshToken,
          secret_refresh_key
        );
        if (decodedRefreshToken) {
          const { userId } = decodedRefreshToken;
          const newAccessToken = await generateAccessToken(userId);
          req.newAccessToken = newAccessToken;
          req.userId = userId;
          req.refreshToken = refreshToken;
          next();
        } else {
          console.error("Error verifying tokens:", err.message);
          return res.status(401).send("Invalid refresh token");
        }
      } catch (refreshError) {
        next(refreshError);
      }
    } else {
      console.error("Error verifying tokens:", err.message);
      return res.status(401).send("Invalid token");
    }
  }
};
