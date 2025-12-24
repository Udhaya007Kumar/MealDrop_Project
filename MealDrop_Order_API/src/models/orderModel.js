import db from "../config/db.js";

export const createOrder = async ({ user_id, restaurant_id, items, total_price }) => {
  const [result] = await db.execute(
    "INSERT INTO orders (user_id, restaurant_id, total_price) VALUES (?, ?, ?)",
    [user_id, restaurant_id, total_price]
  );
  const orderId = result.insertId;

  for (let item of items) {
    await db.execute(
      "INSERT INTO order_items (order_id, menu_id, quantity, price) VALUES (?, ?, ?, ?)",
      [orderId, item.menu_id, item.quantity, item.price]
    );
  }
  return orderId;
};

export const getOrdersByUser = async (user_id) => {
  const [rows] = await db.execute(
    "SELECT * FROM orders WHERE user_id = ?",
    [user_id]
  );
  return rows;
};

export const assignDelivery = async (order_id, delivery_partner_id) => {
  await db.execute(
    "UPDATE orders SET delivery_partner_id=?, status='OUT_FOR_DELIVERY' WHERE id=?",
    [delivery_partner_id, order_id]
  );
};

export const updateStatus = async (order_id, status) => {
  await db.execute(
    "UPDATE orders SET status=? WHERE id=?",
    [status, order_id]
  );
};
