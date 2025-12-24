import express from "express";
import { register, login } from "../controllers/restaurantAuthController.js";
import { protect } from "../middleware/auth.js";
import { getMenu, addMenuItem, updateMenu, deleteMenu } from "../controllers/menuController.js";

const router = express.Router();

// Auth
router.post("/register", register);
router.post("/login", login);

// Menu routes
router.use(protect); // all routes below require auth
router.get("/menu", getMenu);
router.post("/menu", addMenuItem);
router.put("/menu/:id", updateMenu);
router.delete("/menu/:id", deleteMenu);

export default router;
