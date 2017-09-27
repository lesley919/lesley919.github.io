function initMap() {
    //(<map element>, <configuration object>)
    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 10,
  });
   // var marker = new google.maps.Marker({
   //   position: userLocation,
   //   map: map,
   //   title: 'User Location',
    //});
}
initMap();