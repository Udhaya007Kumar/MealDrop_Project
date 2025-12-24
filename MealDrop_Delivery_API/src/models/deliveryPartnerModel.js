import db from "../config/db.js";

export const createPartner = async (data) => {
  const { name, email, phone, password, vehicle_type } = data;
  const [result] = await db.execute(
    `INSERT INTO delivery_partners 
     (name, email, phone, password, vehicle_type) 
     VALUES (?, ?, ?, ?, ?)`,
    [name, email, phone, password, vehicle_type]
  );
  return result.insertId;
};

export const findByEmail = async (email) => {
  const [rows] = await db.execute(
    "SELECT * FROM delivery_partners WHERE email = ?",
    [email]
  );
  return rows[0];
};

export const findById = async (id) => {
  const [rows] = await db.execute(
    "SELECT id, name, email, phone, vehicle_type FROM delivery_partners WHERE id = ?",
    [id]
  );
  return rows[0];
};
