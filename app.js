const path = require("path");
const morgan = require("morgan");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const speakerRouter = require("./routes/speakerRoutes");

const express = require("express");
const app = express();

// Development logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serving static files
app.use(express.static(`${__dirname}/public`));

// Test middleware
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

//  ROUTES
app.use("/api/v1/speakers", speakerRouter);

module.exports = app;
