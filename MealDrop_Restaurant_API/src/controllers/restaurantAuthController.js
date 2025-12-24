import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createRestaurant, findRestaurantByEmail } from "../models/restaurantModel.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, phone, password, address } = req.body;

    const existing = await findRestaurantByEmail(email);
    if (existing) return res.status(400).json({ message: "Restaurant already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    await createRestaurant({ name, email, phone, password: hashedPassword, address });

    res.status(201).json({ message: "Restaurant registered successfully" });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const restaurant = await findRestaurantByEmail(email);
    if (!restaurant) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, restaurant.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: restaurant.id, role: "RESTAURANT" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (err) {
    next(err);
  }
};
