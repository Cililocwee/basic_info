const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

// Keep last
app.get("*", (req, res) => {
  res.status(404).send(`404: Page Not Found ${req.url}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
