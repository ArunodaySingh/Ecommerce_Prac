const express = require("express");
const product = require("./routes/productRoutes");
const errorMiddleware=require("./middleware/error");
const app = express();

// Middleware
app.use(express.json());
app.use(errorMiddleware);
app.use("/api/v1", product);

module.exports = app;