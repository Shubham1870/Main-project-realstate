const express = require("express");
const app = express();
const PORT = 8080 || process.env.PORT
const bodyParser = require('body-parser')
const cors = require('cors');

//DB CONNECTION
const connection = require("./db/connection");
connection();
const Userroutes=require("./Routes/UserRoutes")

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use("/",Userroutes)

app.listen(PORT, () => { console.log(`server started at PORT ${PORT}`) })