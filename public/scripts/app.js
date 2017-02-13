// app.js - application controller

$(document).ready(function(){


  // renders data to the page
  var renderAll = function(parks){
    console.log(parks);
    for(var i=0; i<parks.length; i++){
      if(!parks[i].photo){
        parks[i].photo = '../images/default.jpeg'; }
      if(parks[i].hasVisited == false){
        $('#placesNotYetCamped').append(
          // html to be appended
        `<div class="container-fluid panel park-panel data-id='${parks[i].id}' ">
          <img src="${parks[i].photo}">
          <li>${parks[i].name}</li>
          <li>${parks[i].location}</li>
          <br>
          <button id="edit-btn" type="button" class="btn btn-default btn-md data-id='${parks[i].id}' ">
            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
          </button>
          <button id="trash-btn" type="button" class="btn btn-default btn-md data-id='${parks[i].id}' ">
            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
          </button>
        </div>`);
        } else {
          $('#placesCamped').append(
            // html to be appended
            `<div class="container-fluid panel park-panel">
            <img src="${parks[i].photo}">
            <li>${parks[i].name}</li>
            <li>${parks[i].location}</li>
            <li>${parks[i].dateVisited}</li>
            <br>
            <button id="edit-btn" type="button" class="btn btn-default btn-md">
              <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </button>
            <button id="trash-btn" type="button" class="btn btn-default btn-md">
              <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button>
            </div>`);
          }
        }
      }
  // renders new park to homepage list
  var renderOne = function(park){
    if(!park.photo){
      park.photo = '../images/default.jpeg'; }
    if(park.hasVisited == false){
      // html to be appened
      $('#placesNotYetCamped').append(
      `<div class="container-fluid panel park-panel">
        <img src="${park.photo}">
        <li>${park.name}</li>
        <li>${park.location}</li>
        <li>${park.dateVisited}</li>
        <br>
        <button type="button" class="btn btn-default btn-md">
          <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
        </button>
        <button type="button" class="btn btn-default btn-md">
          <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
          </button>
      </div>`);
    } else {
      // html to be appened
      $('#placesCamped').append(
      `<div class="container-fluid panel park-panel">
        <img src="${park.photo}">
        <li>${park.name}</li>
        <li>${park.location}</li>
        <li>${park.dateVisited}</li>
        <br>
        <button type="button" class="btn btn-default btn-md">
          <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
          </button>
          <button type="button" class="btn btn-default btn-md">
            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
          </button>
      </div>`);
    }
  }
  // runs on erroneous Ajax call
  var onError = function(){
    console.log('try again, ajax');
  }
  // Ajax gets all the parks when the page loads
  $.ajax({
    method: "GET",
    url: "./api/parks/",
    success: renderAll,
    error: onError
  });

  // 'Add new park' button event -> shows form field
  $('#new-btn').on('click', function(event){
    console.log('new button says hello');
    $('#new-btn').removeClass('btn-outline-danger').addClass('hide-me');
    $('#new-box').removeClass('hide-me');
  });
  // 'Form' event -> adds new park to database
  $('#submit-btn').on('click', function(event){
    console.log('submit button says hello');
    $.ajax({
      method: "POST",
      url: "./api/parks/",
      data: $('form').serialize(),
      success: renderOne,
      error: onError
    });
  });

  // delete TODO:BUTTONS EXIST ON FRONT END, ROUTES WORK, NEEDS TO BE CONNECTED
  $('#trash-btn').on('click', function(event){
    console.log('trash button says hello');
  });
  // update TODO:BUTTONS EXIST ON FRONT END, ROUTES WORK, NEEDS TO BE CONNECTED
  $('.btn-default').on('click', function(event){
    event.preventDefault();
    console.log('update me');
  });

}); // closes .ready
