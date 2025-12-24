import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

/* ✅ CORS MUST COME FIRST */
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

/* Handle preflight requests */
app.options("*", cors());

app.use(express.json());

app.use("/api/users", userRoutes);

app.use(errorHandler);
cd
export default app;
