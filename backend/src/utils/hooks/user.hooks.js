import express from "express";
import { hashPassword } from "../helpers/apiHelpers.js";
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
