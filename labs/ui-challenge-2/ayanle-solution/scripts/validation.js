
$( "#inputField" )
  .blur(function() {
    $( "#error-slot" ).text( "please enter a valid username" );
  });
  $( "#inputField" )
    .focus(function() {
      $( "#error-slot" ).text( "" );
    });