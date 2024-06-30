const express = require("express");
const dotenv = require("dotenv").config()


const app = express();
app.use(express.json())

app.use('/api/contacts', require('./routes/contactRoutes'));


const port = parseInt(process.env.PORT) || 8001;
// console.log(port);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});