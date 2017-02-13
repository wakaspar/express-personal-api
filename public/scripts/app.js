console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  // renders data to the page
  var renderAll = function(data){
    for(var i=0; i<data.length; i++){
      if(data[i].hasVisited == false){
        $('#placesNotYetCamped').append(
          // html to be appended
        `<div class="container-fluid panel">
          <li>${data[i].name}</li>
          <li>${data[i].location}</li>
          <br>
          <button type="button" class="btn btn-default btn-md">
            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
          </button>
          <button type="button" class="btn btn-default btn-md">
            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
          </button>
        </div>`);
        } else {
          $('#placesCamped').append(
            // html to be appended
            `<div class="container-fluid panel">
            <li>${data[i].name}</li>
            <li>${data[i].location}</li>
            <li>${data[i].dateVisited}</li>
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
      }

  // runs on successful Ajax call
  var onSuccess = function(res){
    console.log('good job, ajax');
    renderAll(res);
  }
  // runs on erroneous Ajax call
  var onError = function(){
    console.log('try again, ajax');
  }

  var lilSuccess = function(data){
    console.log('good post');
    console.log(data);
    $('#placesCamped').append(
      `<div class="container-fluid panel">
        <li>${data.name}</li>
        <li>${data.location}</li>
        <li>${data.dateVisited}</li>
        <br>
        <button type="button" class="btn btn-default btn-md">
          <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
        </button>
        <button type="button" class="btn btn-default btn-md">
          <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
        </button>
      </div>`);
  }


  // Ajax gets all the parks when the page loads
  $.ajax({
    method: "GET",
    url: "./api/parks/",
    success: onSuccess,
    error: onError
  });


  // 'Add new park' button event -> shows form field
  $('#new-btn').on('click', function(){
    $('#new-btn').removeClass('btn-outline-danger').addClass('hide-me');
    $('#new-box').removeClass('hide-me');
  });

  // 'Form' event -> adds new park to database
  $('#submit-btn').on('click', function(){
    $.ajax({
      method: "POST",
      url: "./api/parks/",
      data: $('form').serialize(),
      success: lilSuccess,
      error: onError
    });
  });
}); // closes .ready
