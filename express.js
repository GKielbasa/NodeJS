const express = require("express");
const port = 3000;
const generateTitle = require("./generateTitle");
const app = express();
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  const title = generateTitle.generateTitle;
  res.render("index", {
    pageTitle: title,
    pageBody: "hello node",
  });
});

app.get("/kontakt", (req, res) => {
  res.render("kontakt");
});
app.listen(port);
