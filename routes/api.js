const router = require("express").Router();
const Transaction = require("../models/transaction.js");
const path = require("path");

// Default route
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

module.exports = router;