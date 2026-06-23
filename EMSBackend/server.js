const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express();

//middleware 
app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("EMS Backend running Successfully")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log("Server is running on 5000")
})
