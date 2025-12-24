import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`MealDrop Restaurant API running on port ${PORT}`);
});
