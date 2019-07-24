//REQUIRES//
const express = require("express");
const app = express();
// let ejs = require('ejs');
var bodyParser = require("body-parser");
var mongoose = require("mongoose")
Campground = require("./models/campground");
seedDB = require("./seed");

seedDB();
//APP CONFIG//
mongoose.connect("mongodb://localhost/blog_practice")
app.use(bodyParser.urlencoded({useNewUrlParser: true}));
app.set("view engine", "ejs")
app.use(express.static("public"));







app.get('/', (request, response, next) => {
  response.render("landing");
});

app.get("/campgrounds", (req, res) => {
  Campground.find()
  .then(allCampgrounds => {res.render("campgrounds", {campgrounds: allCampgrounds});
})
  
  .catch( error => {console.log("???", error);
  })
});

// app.post("/campgrounds", (req, res) => {
//   var name =   req.body.name;
//   var image = req.body.image;
//   var NewCampground = {name: name, image: image}
//   campgrounds.push(NewCampground);

//   res.redirect("/campgrounds");

//  res.send("there is some data")
// });

app.get("/campgrounds/new", (req, res) => {
  res.render("new")
});

app.listen(3000, () => {
  console.log('the server runs on port 3000!')
});

