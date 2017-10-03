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

// 1. Initialize Firebase

  // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAXl-KQT1j1FZgCPevh8wquH6MmFzgbbXQ",
    authDomain: "monks-cafe-36b20.firebaseapp.com",
    databaseURL: "https://monks-cafe-36b20.firebaseio.com",
    projectId: "monks-cafe-36b20",
    storageBucket: "monks-cafe-36b20.appspot.com",
    messagingSenderId: "1052596221089"
  };
  firebase.initializeApp(config);

  // connect to database
var database = firebase.database();

// this is object literation notation that will be populated w user input
var rezData = { };

//submit form button
$('#rezform').on('submit', function(e){
  e.preventDefault();

  if ($('#name').val() === '') {
    $('.name').text('*Please include your name');
  } else if ($('#date').val() === '') {
    $('.date').text('*Please enter your desired date');
  } else {
    $('.name').text('');
    $('.date').text('');
// get user input

rezData.name = $('#name').val();
rezData.date = $('#date').val();

// empty input values
$('#name').val('');
$('#date').val('');
//$('.day').text('');

// create section for data in firebase database
  var rezReference = database.ref('reservations');

// post new rez to database
  rezReference.push(rezData);
$('#modal').delay(1000).fadeIn();
//$('#modal').delay(3000).fadeOut();
}
});

function getReservations() {
database.ref('reservations').on('value', function (results) {
// Code to execute when a value changes goes here
var allReservations = results.val();
// empty array
var reservations = [];
    
for (var reservation in allReservations) {
  var rezInfo = {
    name: allReservations[reservation].name,
    date: allReservations[reservation].date,
    //reservationId: reservation
  };

//handlebars template
var source = $('#rez-template').html();
var template = Handlebars.compile(source);
var newRez = template(rezInfo);
reservations.push(newRez)
}

// remove all list reservations from DOM before appending list reservations
$('tbody').empty();
//append each rez to the complete list of reservations
for (var i in reservations) {
  $('tbody').append(reservations[i])
}
});
}

getReservations();

// reminder button 

$('#reminder').on('mouseenter', function(){
  $(this).addClass('btn_hover');
});

$('#reminder').on('click', function(){
  $('#modal').fadeOut(500);
});


//Instagram

    var feed = new Instafeed({
        get: 'user',
        //tagName: 'awesome',
        userId: '6142327337',
        accessToken: '6142327337.1677ed0.c2266fa9fb6a4d62a422d58c5324035d',
        resolution: 'standard_resolution',
        template: '<a href="{{link}}"><img class="instaclass" src="{{image}}" /></a>'
    });
    feed.run();

//Hours of operation

var dates = [1,2,3,4,5,6,7];
var n;
//var dateId = $('#weekdays').children().attr('id');

function dayOpen() {
  var d = new Date();
  var n = d.getDay();
  var t = d.getHours();
  //console.log(t);
 
// see if date matches the id of one of the p tags

for (var i = 0; i < dates.length; i++) {
  if (n === dates[i] && (8 >= t <= 17)){
    $('#' + dates[i]).addClass('pink');
    $('.open_txt').text("OPEN :)");
  } else {
    $('.open_txt').text("CLOSED :(").addClass('pink');
  }
}

};

dayOpen();

function initMap() {
//(<map element>, <configuration object>)
  var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 40.8054491, lng: -73.9654415},
  zoom: 15,
  scrollwheel: false,
});
 var marker = new google.maps.Marker({
   position: {lat: 40.8054491, lng: -73.9654415},
   map: map,
   title: 'Monks Cafe',
});
}
initMap();