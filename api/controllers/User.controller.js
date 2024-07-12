import User from "../models/User.model.js";
import { errorHandler } from "../Utils/error.js";
import bcryptjs from "bcryptjs";
export const test = (req, res) => {
  res.json({ Message: "Api is working !!!" });
};

export const updateUser = async (req, res, next) => {
  if (req.user._id !== req.params.userId) {
    return next(errorHandler(403, "you are not allowd"));
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(400, "password must be 6 caharactors long"));
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }
  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(
        errorHandler(400, "Username must be between 7 and 20 charactors")
      );
    }
    if (req.body.username.includes(" ")) {
      return next(errorHandler(400, "username cannot contain speses"));
    }
  }
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.user,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          googlePhotoUrl: req.body.googlePhotoUrl,
          password: req.body.password,
        },
      },
      { new: true }
    );
    console.log(updateUser);
   const { password, ...rest } = updateUser._doc;
   res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const check = (req, res) => {
  res.json({ Message: "put is working !!!" });
};
