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

function addJoke(){
  var newSetUp = $('#setUpIn').val();
  var newPunch = $('#punchIn').val();

  if (newSetUp === '' || newPunch === '') {
    alert('Sorry! Set-up and Punchline are required fields!');
  } else {
    var newAuthor = $('#authorIn').val();
    if (newAuthor === ''){
      newAuthor = 'Anonymous';
    }

    jokeToSend = {whoseJoke: newAuthor, jokeQuestion: newSetUp, punchLine: newPunch};

    $.ajax({
            type: 'POST',
            url: '/add',
            data: jokeToSend,
            success: function( data ){
              console.log( 'got this from server - ' + data );
              alert('Congratulations! Your joke was added to the Joke Book App!');
              clearInputs();
            },
            statusCode: {
              404: function(){
                alert('404 Error! Cannot load page');
              }
            }
          }); // end Ajax post code
  }
}

function clearInputs(){
  $('#setUpIn').val('');
  $('#punchIn').val('');
  $('#authorIn').val('');
}
/// == JavaScript == ///

$(document).ready(function(){
  console.log('Document ready!');

  $('#dispAll').on('click',displayJokes);

  $('#jokeIn').on('click',addJoke);
}); // end document ready
