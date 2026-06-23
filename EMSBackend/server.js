const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

db.getConnection()
  .then((connection) => {
    console.log("MySQL Connected Successfully");
    connection.release();
  })
  .catch((err) => {
    console.error("Database Connection Failed");
    console.error(err.message);
  });

app.get("/", (req, res) => {
  res.send("EMS Backend Running Successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});