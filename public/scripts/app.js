console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  // your code
  var render = function(data){
    for(var i=0; i<data.length; i++){
      $('#results').append(`<p>${data[i].name}</p>`);
    }
  }

  var onSuccess = function(res){
    console.log('good job, ajax');
    console.log(res);
    render(res);
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
