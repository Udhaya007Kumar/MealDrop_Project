import { findUserById } from "../models/userModel.js";

export const getProfile = async (req, res, next) => {
  try {
    const user = await findUserById(req.user.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
};
