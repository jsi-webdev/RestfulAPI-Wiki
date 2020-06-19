//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = requre("mongoose");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const articleSchema = mongoose.Schema({
  title: String,
  content: String,
});

const Article = mongoose.model("Article", articleSchema);

app.listen(3000, function (err) {
  if (!err) {
    console.log("Server is successfully started on port 3000");
  }
});
