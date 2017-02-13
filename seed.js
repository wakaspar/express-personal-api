// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

 var db = require('./models');

 var parks = [
   {
     name: 'Joshua Tree National Park',
     location: 'California, USA',
     hasVisited: true,
     dateVisited: 'July 2015',
     photo: 'https://www.kcet.org/sites/kl/files/atoms/article_atoms/www.kcet.org/news/the_back_forty/assets_c/2013/06/Joshua-trees-6-7-13-thumb-600x337-52805.jpg',
     vegetation: 'green'
  },
  {
    name: 'Death Valley National Park',
    location: 'California, USA',
    hasVisited: true,
    dateVisited: 'January 2015',
  },
  {
   name: 'Seoraksan National Park',
   location: 'Gangwon-do, South Korea',
   hasVisited: true,
   dateVisited: 'July 2015',
 },
 {
   name: 'Banff National Park',
   location: 'Alberta, Canada',
   hasVisited: false,
   dateVisited: '',
   photo: 'https://www.kcet.org/sites/kl/files/atoms/article_atoms/www.kcet.org/news/the_back_forty/assets_c/2013/06/Joshua-trees-6-7-13-thumb-600x337-52805.jpg'
 },
 {
   name: 'Grand Teton National Park',
   location: 'Wyoming, USA',
   hasVisited: false,
   dateVisited: '',
 },
 {
   name: 'Arches National Park',
   location: 'Utah, USA',
   hasVisited: false,
   dateVisited: '',
 },
 {
   name: 'Badlands National Park',
   location: 'Montana, USA',
   hasVisited: false,
   dateVisited: '',
   photo: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/56820D26-1DD8-B71B-0BD35E8B2E97A2A8.jpg?width=307&quality=90&mode=crop'
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
