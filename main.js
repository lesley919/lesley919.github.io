$(window).on('load', function(){
  $('#banner').fadeIn(500);
  //$('#banner_text_container').fadeIn();
});


//drop-down menu
$('#mp_menu').on('click', function(e){
  e.preventDefault();
  $('#sub_menu').slideToggle(200);

});

//button hover style

$('#submit').on('mouseenter', function(){
  $(this).addClass('btn_hover');
});

$('#submit').on('mouseleave', function(){
  $(this).removeClass('btn_hover');
});

//inline validation function
$('#name').on('blur', function(){
  if ($('#name').val() === '') {
    $('.name').text('*Please include your name');
  } else {
    $('.name').text('');
  }
});


//pop-up date picker
 $( function() {
    $( "#date" ).datepicker();
  });

//$('#date').on('blur', function(){
// if ($('#date').val() === '') {
//    $('.date').html('*Please include your desired date');
//  } else {
//    $('.date').text('');
//  }
//});



//submit form button
$('#submit').on('click', function(e){
  e.preventDefault();
  //code for form submission here

  if ($('#name').val() === '') {
    $('.name').text('*Please include your name');
  } else {
    $('.name').text('');
  };

 if ($('#date').val() === '') {
    $('.date').html('*Please include your desired date');
  } else {
    $('.date').text('');
  };

});

//back-to-top

function initMap() {
//(<map element>, <configuration object>)
  var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 40.8054491, lng: -73.9654415},
  zoom: 15,
});
 var marker = new google.maps.Marker({
   position: {lat: 40.8054491, lng: -73.9654415},
   map: map,
   title: 'Monks Cafe',
});
}
initMap();