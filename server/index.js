const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get("/home", (req, res) => {
  res.status(200).send();
});

app.listen(3000);

