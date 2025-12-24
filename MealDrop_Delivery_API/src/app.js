import express from "express";
import deliveryRoutes from "./routes/deliveryRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use("/api/delivery", deliveryRoutes);
app.use(errorHandler);

export default app;
