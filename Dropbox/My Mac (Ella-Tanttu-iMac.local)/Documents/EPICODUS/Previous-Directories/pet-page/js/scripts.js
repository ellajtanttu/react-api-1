$(document).ready(function() {

  $("button#night").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#day").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#original").click(function() {
    $("body").removeClass();
    $("body").addClass("original-background");
  });

  $("p#p1").click(function() {
    $("p#p1").toggleClass("crazybox");
  });

  $("p#p2").click(function() {
    $("p#p2").toggleClass("crazybox");
  });

  $("p#p3").click(function() {
    $("p#p3").toggleClass("crazybox");
  });

});