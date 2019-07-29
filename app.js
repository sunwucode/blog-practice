//REQUIRES//
const express = require("express");
const app = express();
// let ejs = require('ejs');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
passport = require("passport");
localStrategy = require("passport-local");
Campground = require("./models/campground");
User = require("./models/user");
// seedDB = require("./seed");
// seedDB();

//APP CONFIG//
mongoose.connect("mongodb://localhost/blog_practice")
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")
app.use(express.static("public"));

//Passport configuration //

app.use(require("express-session")({
  secret: "I hate cats",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//==============
// AUTH ROUTES
//==============

//show register form
app.get("/register", (req, res)=> {
  res.render("register");
})
// handle sign up logic
app.post("/register", (req, res) => {
  var newUser = ({username: req.body.username});
  User.register(newUser, req.body.password, function (err, user) {
    if(err){
      console.log(err);
      return res.render("register")
    }
    passport.authenticate("local")(req, res, function(){
      res.redirect("/campgrounds");
    });
  });
});

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

