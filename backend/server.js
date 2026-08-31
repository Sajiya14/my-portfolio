const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const contactRoutes = require("./routes/contactRoutes.js");

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL
}));

app.use(express.json());

const PORT = process.env.PORT || 3000;

connectDB();

app.get("/api", (req, res) => {
  res.send("API is running...");
});

app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;