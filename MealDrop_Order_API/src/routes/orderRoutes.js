import express from "express";
import { placeOrder, fetchOrders, assignOrder, changeStatus } from "../controllers/orderController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.use(protect); // all routes require auth

router.post("/", placeOrder); // place order
router.get("/", fetchOrders); // get user orders
router.put("/assign", assignOrder); // admin/restaurant assign delivery
router.put("/status", changeStatus); // update status

export default router;
