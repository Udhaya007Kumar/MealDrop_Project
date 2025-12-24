import { createMenuItem, getMenuByRestaurant, updateMenuItem, deleteMenuItem } from "../models/menuModel.js";

export const addMenuItem = async (req, res, next) => {
  try {
    const restaurant_id = req.user.id;
    const { item_name, description, price } = req.body;
    const id = await createMenuItem({ restaurant_id, item_name, description, price });
    res.status(201).json({ id, message: "Menu item added" });
  } catch (err) {
    next(err);
  }
};

export const getMenu = async (req, res, next) => {
  try {
    const restaurant_id = req.user.id;
    const menu = await getMenuByRestaurant(restaurant_id);
    res.json(menu);
  } catch (err) {
    next(err);
  }
};

export const updateMenu = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await updateMenuItem(id, data);
    res.json({ message: "Menu item updated" });
  } catch (err) {
    next(err);
  }
};

export const deleteMenu = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteMenuItem(id);
    res.json({ message: "Menu item deleted" });
  } catch (err) {
    next(err);
  }
};
