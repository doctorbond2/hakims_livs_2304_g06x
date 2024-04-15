import { compareAdminKeys } from "../utils/helpers/apiHelpers.js";
export function authTokenMiddleware(req, res, next) {
  const token = req.header("Authorization") || "";
  const accessToken = token.split(" ")?.[1] || "";
  if (token) {
    return res.status(401).json({ message: "No token provided" });
  }
  console.log(token);
  next();
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
