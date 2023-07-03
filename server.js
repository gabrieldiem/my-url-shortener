const express = require("express");
const app = express();
const port = process.env.port || 8080;

app.get("/*", (req, res) => {
  const firstSubdomain = req.subdomains[0];

  if (firstSubdomain === "short"){
    res.status(200)
    .send("Future URL Shortener");
    
  } else {
    res.status(200)
    .send("Hello, you are here where no subdomains are present");
  }

})

app.listen(port, () => {
  console.log("[Server started]");
});