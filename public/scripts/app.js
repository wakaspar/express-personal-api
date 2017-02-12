console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  // renders all parks in browser
  var renderAll = function(data){
    for(var i=0; i<data.length; i++){
      if(data[i].hasVisited == false){
      $('#placesNotYetCamped').append(
        // html to be appended
        `<div class="container-fluid panel">
              <li>${data[i].name}</li>
              <li>${data[i].location}</li>
        </div>`);
      } else {
        $('#placesCamped').append(
          // html to be appended
          `<div class="container-fluid panel">
                <li>${data[i].name}</li>
                <li>${data[i].location}</li>
                <li>${data[i].dateVisited}</li>
          </div>`);
      }
    }
  }

  var onSuccess = function(res){
    console.log('good job, ajax');
    console.log(res);
    renderAll(res);
  }
  var onError = function(){
    console.log('try again, ajax');
  }

  $.ajax({
    method: "GET",
    url: "/api/parks/",
    success: onSuccess,
    error: onError
  });


}); // closes .ready
