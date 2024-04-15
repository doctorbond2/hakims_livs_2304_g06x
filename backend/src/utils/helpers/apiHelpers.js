const adminKey = process.env.ADMIN_KEY;

export const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
export const compareAdminKeys = (admin_key_frontend) => {
  console.log(admin_key_frontend, adminKey);
  return admin_key_frontend === adminKey ? true : false;
};
