const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const errorPg = path.join(__dirname, "./404.html");

app.use(express.static("public"));

// Keep last
app.use((req, res) => {
  res.status(404).sendFile(errorPg);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
