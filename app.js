const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const productsRoutes = require("./api/routes/products");
const ordersRoutes = require("./api/routes/orders");

mongoose.connect("mongodb+srv://admin:" + process.env.MONGO_ATLAS_PW + "@trainingcluster.e0nvm.mongodb.net/rest-shop?retryWrites=true&w=majority");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE")
        return res.status(200).json({});
    }
    next();
});

app.use("/api/products", productsRoutes);
app.use("/api/orders", ordersRoutes);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 400;
    next(error);
});

app.use((err, req, res, next) => {
    return res
        .status(err.error || 500)
        .json({
            error: {
                message: err.message
            }
        });
});

module.exports = app;