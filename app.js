//REQUIRES//
const express = require("express");
const app = express();
// let ejs = require('ejs');
var bodyParser = require("body-parser");
var mongoose = require("mongoose")
Campground = require("./models/campground")

//APP CONFIG//
mongoose.connect("mongodb://localhost/blog_practice")
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")
app.use(express.static("public"));






var campgrounds = [
  {name :"Salmon Creek", image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"},
  {name :"Granite Hill", image: "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"},
  {name :"Mountain view", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"},
]

app.get('/', (request, response, next) => {
  response.render("landing");
});

app.get("/campgrounds", (req, res) => {
  
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", (req, res) => {
  var name =   req.body.name;
  var image = req.body.image;
  var NewCampground = {name: name, image: image}
  campgrounds.push(NewCampground);

  res.redirect("/campgrounds");

 res.send("there is some data")
});

app.get("/campgrounds/new", (req, res) => {
  res.render("new")
});

app.listen(3000, () => {
  console.log('the server runs on port 3000!')
});

