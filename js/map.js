"use strict";


/* function to initialize google maps object

function initMap(){
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
          center: {lat: 38.2500, lng: -85.7667},
          zoom: 15
        });
    
} */

// Var to hold information from text boxes

var value1;
var value2;

// var to hold distance.

var value3;

// var to hold target latitude (target1) and longitude (target3)
var target1;
var target3;

//var to hold random numbers for dice mechanics. Generates a number range of 1 through 10
var dice1;

function diceFate () {
    dice1 = Math.floor((Math.random()*10)+1);
}
// Var to hold target information

// Function to generate target

function returnTarget() {
    diceFate ();
    

    if (dice1 == 1) {
        target1 = "38.0297";
        target3 = "-84.4947";
        document.getElementById("target2").innerHTML = "Paragraph changed! 1";
    } else if (dice1 == 2) {
        target1 = "38.0297";
        target3 = "-84.4947";
        document.getElementById("target2").innerHTML = "Paragraph changed! 2";
    } else if (dice1 == 3) {
        target1 = "38.0297";
        target3 = "-84.4947";
        document.getElementById("target2").innerHTML = "Paragraph changed! 3";
    } else if (dice1 == 4) {
        target1 = "38.0297";
        target3 = "-84.4947";
        document.getElementById("target2").innerHTML = "Paragraph changed! 4";
    } else if (dice1 == 5) {
        target1 = "38.0297";
        target3 = "-84.4947";
        document.getElementById("target2").innerHTML = "Paragraph changed! 5";
    } else if (dice1 == 6) {
        target1 = "38.0297";
        target3 = "-84.4947";
        document.getElementById("target2").innerHTML = "Paragraph changed! 6";
    } else if (dice1 == 7) {
        target1 = "38.0297";
        target3 = "-84.4947";
        document.getElementById("target2").innerHTML = "Paragraph changed! 7";
    } else if (dice1 == 8) {
        target1 = "38.0297";
        target3 = "-84.4947";
        document.getElementById("target2").innerHTML = "Paragraph changed! 8";
    } else if (dice1 == 9) {
        target1 = "38.0297";
        target3 = "-84.4947";
        document.getElementById("target2").innerHTML = "Paragraph changed! 9";
    } else {
        target1 = "38.0297";
        target3 = "-84.4947";
        document.getElementById("target2").innerHTML = "Paragraph changed! 10";
        
    }
    
    
    
};






// Function to send values to map and generate the result
function finalResult() {
    //value3 = "lat: " + value1 + ", lng: " + value2 + ";";
    
//    value1 = (isNumber(value1) ? 0 : value1);
//    value2 = (isNumber(value2) ? 0 : value2);
//    
//    value1 = latRange(value1);
//    value2 = lngRange(value2);
//    
//    document.getElementById("latitude").value = value1;
//    document.getElementById("longitude").value = value2;
    
   value1 = document.getElementById("latitude").value;
   value2 = document.getElementById("longitude").value;
    
    
    
    
    initMap();
    winLose();
    
    
}

//function isNumber(n) {
//    return !isNaN(parseFloat(n)) && isFinite(n);
//}
//
//function latRange(n) {
//    return Math.min(Math.max(parseInt(n), -90), 90);
//}
//
//function lngRange(n) {
//    return Math.min(Math.max(parseInt(n), -180), 180);
//}


// Function to display map and generate the distance result

function initMap() {
  var bounds = new google.maps.LatLngBounds;
  var markersArray = [];

  var origin1 = new google.maps.LatLng(value1, value2);
  // var origin2 = 'Greenwich, England';
  var destinationA = new google.maps.LatLng(target1, target3);
  // var destinationB = {lat: 50.087, lng: 14.421};

  var destinationIcon = 'https://chart.googleapis.com/chart?' +
      'chst=d_map_pin_letter&chld=D|FF0000|000000';
  var originIcon = 'https://chart.googleapis.com/chart?' +
      'chst=d_map_pin_letter&chld=O|FFFF00|000000';
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 38.2500, lng: -85.7667},
    zoom: 15
  });
  var geocoder = new google.maps.Geocoder;

  var service = new google.maps.DistanceMatrixService;
  service.getDistanceMatrix({
    origins: [origin1],
    destinations: [destinationA],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.IMPERIAL,
    avoidHighways: false,
    avoidTolls: false
  }, function(response, status) {
    if (status !== google.maps.DistanceMatrixStatus.OK) {
      alert('Error was: ' + status);
    } else {
      var originList = response.originAddresses;
      var destinationList = response.destinationAddresses;
       var outputDiv = document.getElementById('output');
      outputDiv.innerHTML = '';
      deleteMarkers(markersArray);

      var showGeocodedAddressOnMap = function(asDestination) {
        var icon = asDestination ? destinationIcon : originIcon;
        return function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            map.fitBounds(bounds.extend(results[0].geometry.location));
            markersArray.push(new google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
              icon: icon
            }));
          } else {
            alert('Geocode was not successful due to: ' + status);
          }
        };
      };

      for (var i = 0; i < originList.length; i++) {
        var results = response.rows[i].elements;
        geocoder.geocode({'address': originList[i]},
            showGeocodedAddressOnMap(false));
        for (var j = 0; j < results.length; j++) {
          geocoder.geocode({'address': destinationList[j]},
              showGeocodedAddressOnMap(true));
           outputDiv.innerHTML += originList[i] + ' to ' + destinationList[j] +
              ': ' + results[j].distance.text + ' in ' +
              results[j].duration.text + '<br>';
            value3 = results[j].distance.text;
        }
          
          
      }
    
    }
      
      
      
          
          
      
  });
}

function winLose() {
          var results1 = value3;
          var results2 = parseInt(results1);
          if (results2 <= 250) {
              document.getElementById("results3").innerHTML = "YOU WIN! The target has been found."
          } else {
              
              document.getElementById("results3").innerHTML = "SORRY, YOU LOSE! The target got away this time."
              
          }
}
    
    

function deleteMarkers(markersArray) {
  for (var i = 0; i < markersArray.length; i++) {
    markersArray[i].setMap(null);
  }
  markersArray = [];
}