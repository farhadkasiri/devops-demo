const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "DevOps Demo Running" });
});

module.exports = app;
