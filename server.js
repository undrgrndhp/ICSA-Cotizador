const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://pene:pene@cluster0.v89oc.mongodb.net/Productos",
  { useNewUrlParser: true },
  { useUnifiedTopology: true }
);

//create a data schema
const productosSchema = {
  nombre: String,
  marca: String,
  descripcion: String,
  keywords: Array,
};

const producto = mongoose.model("producto", productosSchema);

app.get("/", function (req, res) {
  res.send("express is working");
});
//app.post

app.listen(3000, function () {
  console.log("server is running at 3000");
});
