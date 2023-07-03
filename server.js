const express = require("express");
const app = express();
const port = process.env.port || 8080;

app.get("/*", (req, res) => {
  res.status(200)
     .send("Hello");
})

app.listen(port, () => {
  console.log("[Server started]");
});