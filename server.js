const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./build"));
}

// Initialize our express routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {});