import db from "../config/db.js";

export const createMenuItem = async ({ restaurant_id, item_name, description, price }) => {
  const [result] = await db.execute(
    `INSERT INTO menus (restaurant_id, item_name, description, price) VALUES (?, ?, ?, ?)`,
    [restaurant_id, item_name, description, price]
  );
  return result.insertId;
};

export const getMenuByRestaurant = async (restaurant_id) => {
  const [rows] = await db.execute(
    "SELECT * FROM menus WHERE restaurant_id = ?",
    [restaurant_id]
  );
  return rows;
};

export const updateMenuItem = async (id, data) => {
  const { item_name, description, price, is_available } = data;
  await db.execute(
    `UPDATE menus SET item_name=?, description=?, price=?, is_available=? WHERE id=?`,
    [item_name, description, price, is_available, id]
  );
};

export const deleteMenuItem = async (id) => {
  await db.execute("DELETE FROM menus WHERE id=?", [id]);
};
