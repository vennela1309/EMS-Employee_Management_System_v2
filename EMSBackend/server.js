const express = require("express");
const cors = require("cors");
require("dotenv").config();
const verifyToken = require("./middleware/authMiddleware");
const employeeRoutes = require("./routes/employeeRoutes");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
db.getConnection()
  .then((connection) => {
    console.log("MySQL Connected Successfully");
    connection.release();
  })
  .catch((err) => {
    console.error("Database Connection Failed");
    console.error(err.message);
  });

app.get('/api/profile',verifyToken,(req,res)=>{
  res.json({
    success:true,
    message:"Protected  Route Accessed",
    user :req.user,
  })
})

app.get("/", (req, res) => {
  res.send("EMS Backend Running Successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});