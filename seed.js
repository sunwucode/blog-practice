var mongoose = require("mongoose");
var Campground = require("./models/campground");

var dataCamp = new Campground(
  {name :"Salmon Creek", 
  image: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  description : "blabla"
})
//   {name :"Granite Hill", 
//   image: "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
//   description : "blabla"
// },
//   {name :"Mountain view", 
//   image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
//   description : "blabla"
// },
// ]

// dataCamp.forEach(function (seed) {
  
// })

function seedDB(){
  dataCamp.save((err)=> {
    if (err) { console.log(err);
    } else { 
      console.log("db seeded");
    }
  }) 
};


module.exports = seedDB;