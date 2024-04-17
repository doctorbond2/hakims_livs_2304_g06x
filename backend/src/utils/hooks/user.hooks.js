import express from "express";
import { hashPassword } from "../helpers/apiHelpers.js";
import bcrypt from "bcrypt";
export async function hashNewOrChangedPW(next) {
  const document = this;
  try {
    if (document.isModified("password") || document.isNew) {
      document.password = await hashPassword(document.password);
      next();
    }
  } catch (err) {
    console.error("Error pre-saving user", err);
    next(err);
  }
}
export async function comparePasswords(input_password, document_password) {
  try {
    if (!input_password || !document_password) {
      throw new Error("Error: provide password or username details.");
    }
    const passwordMatch = await bcrypt.compare(
      input_password,
      document_password
    );
    if (passwordMatch) {
      return true;
    } else {
      throw new Error("Error: Wrong password or username");
    }
  } catch (err) {
    throw err;
  }
}
/*export async function checkForAdmin(req, res, next) {
  const document = this;
  if (req.admin) {
    document.admin = true;
    next();
  } else {
    next();
  }
}
*/
