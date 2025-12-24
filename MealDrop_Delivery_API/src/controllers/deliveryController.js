import { findById } from "../models/deliveryPartnerModel.js";

export const getProfile = async (req, res, next) => {
  try {
    const partner = await findById(req.user.id);
    res.json(partner);
  } catch (err) {
    next(err);
  }
};
