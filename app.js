const express = require("express");
const product = require("./routes/productRoutes");
const errorMiddleware=require("./middleware/error");
const catchAsyncError=require("./middleware/catchAsyncError");
const app = express();

// Middleware
app.use(express.json());
app.use(errorMiddleware);
app.use(catchAsyncError);
app.use("/api/v1", product);


module.exports = app;