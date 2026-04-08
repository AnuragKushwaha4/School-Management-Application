const express = require("express")
const cors = require("cors");
require("dotenv").config();

const app = express()
const schoolRoutes = require("./Routes/schoolRoutes")

app.use(express.json())
app.use(cors());

app.use("/api",schoolRoutes)

const PORT = process.env.PORT
app.listen(PORT,(req,res)=>{
    console.log("server started")
})