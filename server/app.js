const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use("/", express.static("uploads"));
//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "server/config/.env",
  });
}
//Import Routes
const user = require("./controller/user");
//Mount Routes
app.use("/api/v2/user", user);
//Error Handling Middleware
app.use(ErrorHandler);
module.exports = app;
