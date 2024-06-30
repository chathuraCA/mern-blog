import { errorHandler } from "../Utils/error.js";
import User from "../models/User.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are Required"));
  }
  const hasedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hasedPassword,
  });
  try {
    await newUser.save();
    res.json("Sign up succesfull");
  } catch (error) {
    next(error);
  }
};
