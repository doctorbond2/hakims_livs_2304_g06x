export function authMiddleware(req, res, next) {
  const token = req.header("Authorization") || "";
  const accessToken = token.split(" ")?.[1] || "";
  console.log(token);
  next();
}
//POSTMAN AUTH
