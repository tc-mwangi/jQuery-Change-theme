//Adding and removing classes

$(document).ready(function() {
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });

  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });
});

// $("button#green").click(function() {
//   $("body").css("background-color", "green");
// });
//
// $("button#yellow").click(function() {
//   $("body").css("background-color", "yellow");
// });
//
// $("button#red").click(function() {
//   $("body").css("background-color", "red");
// });
