const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const pool = require("./src/config/db");
const routes = require("./src/routes/routes");

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(port, () => {
  console.log(`🚀 Server berjalan di http://localhost:${port}`);
});
