const router = require("express").Router();
const Transaction = require("../models/transaction.js");
const path = require("path");

// Default route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });