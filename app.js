const express = require("express");
const app = express();
const morgan = require("morgan");

const productsRoutes = require("./api/routes/products");
const ordersRoutes = require("./api/routes/orders");

app.use(morgan("dev"));

app.use("/api/products", productsRoutes);
app.use("/api/orders", ordersRoutes);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 400;
    next(error);
});

app.use((err, req, res, next) => {
    res.status(err.error || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

module.exports = app;