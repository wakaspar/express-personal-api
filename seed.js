// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

 var db = require('./models');

 var parks = [
   {
     name: 'Joshua Tree National Park',
     location: 'California, USA',
     hasVisited: true,
     dateVisited: 'July 2015',
     //imgUrl: {default:'n/a'}
  },
  {
    name: 'Death Valley National Park',
    location: 'California, USA',
    hasVisited: true,
    dateVisited: 'January 2015',
    //imgUrl: {default:'n/a'}
  },
  {
   name: 'Seoraksan National Park',
   location: 'Gangwon-do, South Korea',
   hasVisited: true,
   dateVisited: 'July 2015',
   //imgUrl: {default:'n/a'}
 },
 {
   name: 'Banff National Park',
   location: 'Alberta, Canada',
   hasVisited: false,
   dateVisited: '',
   //imgUrl: {default:'n/a'}
 },
 {
   name: 'Grand Teton National Park',
   location: 'Wyoming, USA',
   hasVisited: false,
   dateVisited: '',
   //imgUrl: {default:'n/a'}
 },
 {
   name: 'Arches National Park',
   location: 'Utah, USA',
   hasVisited: false,
   dateVisited: '',
   //imgUrl: {default:'n/a'}
 },
 {
   name: 'Badlands National Park',
   location: 'Montana, USA',
   hasVisited: false,
   dateVisited: '',
   //imgUrl: {default:'n/a'}
 }
];

// remove all parks from database
db.Park.remove({}, function(err, books){
  if(err){
    console.log('error during remove', err);
  } else {
    console.log('removed all parks');
    // seed database with parks from parks_list
    db.Park.create(parks, function(err, park){
      if (err){
        return console.log("Error:", err);
      }
      console.log("Created new parks", park._id)
      process.exit(); // we're all done! Exit the program.
    })
  }
});
