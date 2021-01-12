const express = require("express");
const bodyParse = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static("public"));

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.engine("handlebars", expressHbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require("../burger/controllers/burgers_controllers");
app.use(routes);

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
