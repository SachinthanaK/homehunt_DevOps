const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// Listen to port 5000
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
