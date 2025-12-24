import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createPartner, findByEmail } from "../models/deliveryPartnerModel.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, phone, password, vehicle_type } = req.body;

    const existing = await findByEmail(email);
    if (existing) {
      return res.status(400).json({ message: "Partner already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await createPartner({
      name,
      email,
      phone,
      password: hashedPassword,
      vehicle_type,
    });

    res.status(201).json({ message: "Delivery partner registered" });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const partner = await findByEmail(email);
    if (!partner) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, partner.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: partner.id, role: "DELIVERY" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (err) {
    next(err);
  }
};
