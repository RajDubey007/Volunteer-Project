const express = require("express");
const Rout = require("./Router/routes");
const path = require("path");
var bodyParser = require("body-parser");

const app = express();
const PORT = 3007;
const dftPath = path.join(__dirname, "/Views");

app.set("view engine", "ejs");
app.set("Views", dftPath);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(dftPath));
app.use("/", Rout);

app.listen(PORT, () => {
  console.log(`Your Server Running On http://localhost:${PORT}`);
});
