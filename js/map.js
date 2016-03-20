"use strict";


// function to initialize google maps object

function initMap(){
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
          center: {lat: 38.2500, lng: -85.7667},
          zoom: 15
        });
    
}