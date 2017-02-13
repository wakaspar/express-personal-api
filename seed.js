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
  },
  {
    name: 'Death Valley National Park',
    location: 'California, USA',
    hasVisited: true,
    dateVisited: 'January 2015',
    photo: 'https://www.nps.gov/common/uploads/grid_builder/pwr/crop16_9/9B65A85A-1DD8-B71B-0BDF4BF50595F57F.jpg?width=950&quality=90&mode=crop'
  },
  {
   name: 'Seoraksan National Park',
   location: 'Gangwon-do, South Korea',
   hasVisited: true,
   dateVisited: 'July 2015',
   photo: 'https://media-cdn.tripadvisor.com/media/photo-s/01/1b/d6/12/unification-buddha-near.jpg'
 },
 {
   name: 'Banff National Park',
   location: 'Alberta, Canada',
   hasVisited: false,
   dateVisited: '',
 },
 {
   name: 'Grand Teton National Park',
   location: 'Wyoming, USA',
   hasVisited: false,
   dateVisited: '',
   photo: 'http://www.history.com/s3static/video-thumbnails/AETN-History_VMS/21/201/tdih-feb26-HD.jpg'
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
   photo: 'http://cdn.c.photoshelter.com/img-get/I0000nG3OPQWo8oQ/s/850/850/20110725-blhills-079.jpg'
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
