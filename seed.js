// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

 var db = require('./models');

 var parks = [
   {
     name: 'Joshua Tree National Park'
     location: 'California, USA',
     hasVisited: true,
     dateVisited: 'July 2015',
     imgUrl: {default:'n/a'}
  },
  {
    name: 'Death Valley National Park'
    location: 'California, USA',
    hasVisited: true,
    dateVisited: 'January 2015',
    imgUrl: {default:'n/a'}
  },
  {
   name: 'Seoraksan National Park'
   location: 'Gangwon-do, South Korea',
   hasVisited: true,
   dateVisited: 'July 2015',
   imgUrl: {default:'n/a'}
 },
 {
   name: 'Banff National Park'
   location: 'Alberta, Canada',
   hasVisited: false,
   dateVisited: {default:'n/a'},
   imgUrl: {default:'n/a'}
 },
];

db.Park.create(new_park, function(err, park){
 if (err){
   return console.log("Error:", err);
 }

 console.log("Created new park", park._id)
 process.exit(); // we're all done! Exit the program.
})
