$(document).ready(function(){
  $('.print').click(function(event) {
    event.preventDefault();
    window.print();
  });

  // $('.fa-camera').mouseover(function(event) {
  //   event.preventDefault();
  //   $targetDescription = $(event.target).next();
  //   $targetDescription.slideDown(2000);
  // });

  // $('.fa-gamepad').mouseover(function(event) {
  //   event.preventDefault();
  //   $targetDescription = $(event.target).next();
  //   $targetDescription.slideDown(2000);
  //   // $targetDescription.slideUp();
  // });

  // $('.fa-palette').mouseover(function(event) {
  //   event.preventDefault();
  //   $targetDescription = $(event.target).next();
  //   $targetDescription.slideDown(2000);
  //   // $targetDescription.slideUp();
  // });

  // $('.fa-plane').mouseover(function(event) {
  //   event.preventDefault();
  //   $targetDescription = $(event.target).next();
  //   $targetDescription.slideDown(2000);
  //   // $targetDescription.slideUp();
  // });

  // $('.fa-cookie-bite').mouseover(function(event) {
  //   event.preventDefault();
  //   $targetDescription = $(event.target).next();
  //   $targetDescription.slideDown(2000);
  //   // $targetDescription.slideUp();
  // });
});