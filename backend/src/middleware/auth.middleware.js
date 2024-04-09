export function authMiddleware(req, res, next) {
  const token = req.header("Authorization") || "";
  const accessToken = token.split(" ")?.[1] || "";
  if (token) {
    return res.status(401).json({ message: "No token provided" });
  }
  console.log(token);
  next();
}
//POSTMAN AUTH
