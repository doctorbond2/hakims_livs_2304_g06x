const adminKey = process.env.ADMIN_KEY;
import bcrypt from "bcrypt";
export const hashPassword = async (password) => {
  const salt = 10;
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
export const compareAdminKeys = (admin_key_frontend) => {
  console.log(admin_key_frontend, adminKey);
  return admin_key_frontend === adminKey ? true : false;
};
