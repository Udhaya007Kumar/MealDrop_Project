import express from "express";
import orderRoutes from "./routes/orderRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

// JSON parser
app.use(express.json());

// Routes
app.use("/api/orders", orderRoutes);

// Error middleware
app.use(errorHandler);

export default app;
