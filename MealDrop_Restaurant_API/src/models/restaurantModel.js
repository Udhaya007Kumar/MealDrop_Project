import db from "../config/db.js";

export const createRestaurant = async ({ name, email, phone, password, address }) => {
  const [result] = await db.execute(
    `INSERT INTO restaurants (name,email,phone,password,address) 
     VALUES (?, ?, ?, ?, ?)`,
    [name, email, phone, password, address]
  );
  return result.insertId;
};

export const findRestaurantByEmail = async (email) => {
  const [rows] = await db.execute(
    "SELECT * FROM restaurants WHERE email = ?",
    [email]
  );
  return rows[0];
};

export const findRestaurantById = async (id) => {
  const [rows] = await db.execute(
    "SELECT id, name, email, phone, address, is_open FROM restaurants WHERE id = ?",
    [id]
  );
  return rows[0];
};
