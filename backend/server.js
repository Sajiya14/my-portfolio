const dns = require('node:dns').promises;
dns.setServers(['1.1.1.1', '8.8.8.8']);

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const contactRoutes = require("./routes/contactRoutes.js");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://my-portfolio-zp42.vercel.app"
  ],
  methods: ["GET", "POST"],
}));
app.use(express.json());

const PORT = process.env.PORT || 3000;

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
