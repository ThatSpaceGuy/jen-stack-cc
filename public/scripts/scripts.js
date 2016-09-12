console.log('scripts.js sourced!');
/// == Global Variable Declarations == ///


/// == Function Declarations == ///
function displayJokes() {
  var requesterID = $(this).attr('id');
  console.log('in displayJokes with: ',requesterID);

  var jokeRequest;

  switch (requesterID) {
    case 'dispAll':
      jokeRequest = 'all';
      break;
    default:
      console.log('Error in displayJokes switch statement');
  }

  var requestObject = {dispReq: jokeRequest};

  $.ajax({
          type: 'POST',
          url: '/display',
          data: requestObject,
          success: function( data ){
            var jokeResponse = data.jokePages;
            console.log( 'got this from server - ' + jokeResponse );
            printPages(jokeResponse);
          },
          statusCode: {
            404: function(){
              alert('404 Error! Cannot load page');
            }
          }
        }); // end Ajax post code
}

function printPages(pages){
  console.log('in printPages with:', pages);
  var htmlToDisplay = '';

  for (var i = 0; i < pages.length; i++) {
    htmlToDisplay += '<hr><p class="author">(by '+pages[i].whoseJoke+')</p><p class="setUpLine">'+
      pages[i].jokeQuestion+'</p><p class="punchLine">'+pages[i].punchLine+'</p>';
  }

  $('#jokeBookDisplay').html(htmlToDisplay);
}

/// == JavaScript == ///

$(document).ready(function(){
  console.log('Document ready!');

  $('#dispAll').on('click',displayJokes);

}); // end document ready
