//document ready?
//$(function() {


/*new changeAppPage function*/
function changeAppPage(gameScreen) {

  //the screen to goto
  var gameScreen;

  $(".mypreLoader").css("visibility", "visible");
  $(".mypreLoader").css("display", "inline");

  switch (gameScreen) {


    case 'start':

      $(".contentRoot").empty();

      $(".navBack").css("visibility", "hidden");
      getPartialView(gameScreen);


    break;



  } //close switch

} //close function




//Get content
function getPartialView(screen) {
  var contentLoaded ;
  console.log("screen content injection for "+screen);
  $.get('partialViews/'+screen+'.html', function(data) {
    //inject the content into the DOM
    $(".contentRoot").append(data);
    contentLoaded = true;
  }); //end get
} //close getPartialView function
