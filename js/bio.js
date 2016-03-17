"use strict";

// variables to hold the dice results
    var fate;
    var destiny;
    var karma;
// variables to hold the text of my life story
    var biographyOne;
    var biographyTwo;
    var biographyThree;
// variable to hold life story
    var lifeStory;

// random number generators for dice

    function myFate() {
        fate = Math.floor((Math.random() * 10) + 1);
        destiny = Math.floor((Math.random() * 10) + 1);
        karma = Math.floor((Math.random() * 10) + 1);
        }

//sends string into about.html page as text
function pubBio() {
    myFate();

//if else statements for fate

    if (fate == 1) {
        biographyOne = "From the seas";
        } else if (fate == 2){
        biographyOne = "The cosmos forged";
        } else if (fate == 3){
        biographyOne = "From a burning";
        } else if (fate == 4){
        biographyOne = "In a forgotten";
        } else if (fate == 5){
        biographyOne = "Once upon a rhyme";
        } else if (fate == 6){
        biographyOne = "From far off lands";
        } else if (fate == 7){
        biographyOne = "Across the sky";
        } else if (fate == 8){
        biographyOne = "From the pit";
        } else if (fate == 9){
        biographyOne = "The story of";
        } else {
        biographyOne = "A well crafted";
    }


//if else statements for destiny

    if (destiny == 1) {
        biographyTwo = "meteor";
    } else if (destiny == 2){
        biographyTwo = "swarm";
    } else if (destiny == 3){
        biographyTwo = "shark";
    } else if (destiny == 4){
        biographyTwo = "octopi";
    } else if (destiny == 5){
        biographyTwo = "mouse";
    } else if (destiny == 6){
        biographyTwo = "table";
    } else if (destiny == 7){
        biographyTwo = "dinosaur";
    } else if (destiny == 8){
        biographyTwo = "robot";
    } else if (destiny == 9){
        biographyTwo = "cult";
    } else {
        biographyTwo = "wizard";
    }

//if else statements for karma

    if (karma == 1) {
        biographyThree = "made me.";
    } else if (karma == 2) {
        biographyThree = "enlightened me.";
    } else if (karma == 3) {
        biographyThree = "laughed at me.";
    } else if (karma == 4) {
        biographyThree = "wasn't me.";
    } else if (karma == 5) {
        biographyThree = "found me.";
    } else if (karma == 6) {
        biographyThree = "partied with me.";
    } else if (karma == 7) {
        biographyThree = "mocked me.";
    } else if (karma == 8) {
        biographyThree = "greeted me.";
    } else if (karma == 9) {
        biographyThree = "ignored me.";
    } else {
        biographyThree = "liked me.";
    }


//combines fate destiny and karma into a single string as my life story
// and publishes it to <p> called biog in my about page.
    lifeStory = biographyOne + " " + biographyTwo + " " + biographyThree;
    document.getElementById("biog").innerHTML = lifeStory;
}
