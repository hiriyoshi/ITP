// Enables .env file support
require("dotenv").config();

// express, mongoose
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware

// Routes

// Server
//password = "mongodb+srv://morita:mikomorita@testcluster.kw9pp.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster"
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen("4000", () => {
            console.log("Listening on http://localhost:4000/ and connected to MongoDB");
        })
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message);
    });