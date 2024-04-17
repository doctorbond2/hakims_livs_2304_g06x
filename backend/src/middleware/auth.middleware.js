import { compareAdminKeys } from "../utils/helpers/apiHelpers.js";
import {
  generateAccessToken,
  generateBothAdminTokens,
} from "../utils/helpers/tokenHelpers.js";
const secret_key = process.env.JWT_ACCESS_KEY;
const secret_refresh_key = process.env.JWT_REFRESH_KEY;
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
//POSTMAN AUTH
export function authKeyMiddleware(req, res, next) {
  const { authorization: key } = req.headers;
  if (compareAdminKeys(key)) {
    next();
  } else {
    return res.send("Bloop");
  }
}
export const verifyAccessTokenMiddleware = async (req, res, next) => {
  const authorizationHeader = req.header("Authorization") || "";
  const accessToken = authorizationHeader.split(" ")?.[1] || "";
  console.log("ACCESSTOKEN", accessToken);
  try {
    if (accessToken) {
      const decodedAccessToken = jwt.verify(accessToken, secret_key);
      req.decodedAccessToken = decodedAccessToken;
      next();
    } else {
      throw new Error("Invalid token");
    }
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
};

export const verifyBothTokensMiddleware = async (req, res, next) => {
  const authorizationHeader = req.header("Authorization") || "";
  const accessToken = authorizationHeader.split(" ")?.[1] || "";
  const refreshToken = req.header("Refresh-Token").split(" ")?.[1] || "";
  try {
    if (!accessToken && !refreshToken) {
      return res.status(401).json({ message: "Invalid access, please login." });
    }
    if (accessToken) {
      const decodedAccessToken = jwt.verify(accessToken, secret_key);
      req.decodedAccessToken = decodedAccessToken;
    }
    if (refreshToken) {
      const decodedRefreshToken = jwt.verify(refreshToken, secret_key);
      req.decodedRefreshToken = decodedRefreshToken;
    }
    next();
  } catch (err) {
    console.error("Error verifying tokens:", err.message);
    return res.status(401).send("Invalid token");
  }
  next();
};
// export const verifyAccessTokenMiddleware = async (req, res, next) => {
//   const refreshToken = req.header("Refresh-Token").split(" ")?.[1] || "";
//   try {
//     const decodedToken = jwt.verify(refreshToken, secret_key);
//     if (!decodedToken) {
//       return res.status(400).send("Access denied");
//     }
//     req.decodedToken = decodedToken;
//     next();
//   } catch (err) {
//     return res.status(401).send("Invalid token");
//   }
// };
// export const verifyRefreshTokenMiddleware = async (req, res, next) => {
//   const authorizationHeader = req.header("Authorization") || "";
//   const accessToken = authorizationHeader.split(" ")?.[1] || "";
//   try {
//     const decodedRefreshToken = jwt.verify(accessToken, secret_key);
//     if (!decodedRefreshToken) {
//       return res.status(401).send("Access denied");
//     }
//     req.decodedRefreshToken = decodedRefreshToken;
//     next();
//   } catch (err) {
//     return res.status(401).send("Invalid token");
//   }
// };
