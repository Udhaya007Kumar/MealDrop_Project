import express from "express";
import restaurantRoutes from "./routes/restaurantRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use("/api/restaurants", restaurantRoutes);
app.use(errorHandler);

export default app;
