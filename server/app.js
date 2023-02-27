const express = require("express");
const app = express();
const PORT = 8080 || process.env.PORT

//DB CONNECTION
const connection = require("./db/connection");
connection();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.listen(PORT, () => { console.log(`server started at PORT ${PORT}`) })