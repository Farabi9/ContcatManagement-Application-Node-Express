const express = require("express");
const env = require("dotenv").config()


const app = express();



const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Port is running on server ${port}`)
})