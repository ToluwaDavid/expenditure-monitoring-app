const express = require("express");
require("dotenv").config();

//Initalizing our express app
const app = express();

//setting up the port
port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
