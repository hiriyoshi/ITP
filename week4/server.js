// Enables .env file support
require("dotenv").config();

// express, mongoose
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    if (req.body) {
        console.log("Request body:");
        console.log(req.body);
    }
    next();
});

// Routes
app.use("/posts",require('./src/routes/post'));

// Server

//password = "mongodb+srv://morita:mikomorita@testcluster.kw9pp.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster"
mongoose.connect("mongodb+srv://morita:mikomorita@testcluster.kw9pp.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster")
    .then(() => {
        app.listen("4000", () => {
            console.log("Listening on http://localhost:4000/ and connected to MongoDB");
        })
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message);
    });