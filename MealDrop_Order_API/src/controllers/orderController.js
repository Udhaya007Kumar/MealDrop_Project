import { createOrder, getOrdersByUser, assignDelivery, updateStatus } from "../models/orderModel.js";

export const placeOrder = async (req, res, next) => {
  try {
    const user_id = req.user.id;
    const { restaurant_id, items, total_price } = req.body;
    const orderId = await createOrder({ user_id, restaurant_id, items, total_price });
    res.status(201).json({ orderId, message: "Order placed successfully" });
  } catch (err) {
    next(err);
  }
};

export const fetchOrders = async (req, res, next) => {
  try {
    const user_id = req.user.id;
    const orders = await getOrdersByUser(user_id);
    res.json(orders);
  } catch (err) {
    next(err);
  }
};

export const assignOrder = async (req, res, next) => {
  try {
    const { order_id, delivery_partner_id } = req.body;
    await assignDelivery(order_id, delivery_partner_id);
    res.json({ message: "Delivery partner assigned" });
  } catch (err) {
    next(err);
  }
};

export const changeStatus = async (req, res, next) => {
  try {
    const { order_id, status } = req.body;
    await updateStatus(order_id, status);
    res.json({ message: "Order status updated" });
  } catch (err) {
    next(err);
  }
};
