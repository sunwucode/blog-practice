const express = require("express");
const app = express()

app.set("view engine", "ejs")

app.get('/', (request, response, next) => {
  response.render("landing");
});

app.get("/campgrounds", (req, res) => {
  var campgrounds = [
    {name :"Salmon Creek", image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"},
    {name :"Granite Hill", image: "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"},
    {name :"Mountain view", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"},
  ]
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, () => {
  console.log('the server runs on port 3000!')
});