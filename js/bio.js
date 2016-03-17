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

//if else statements for fate

    if (fate == 1) {
        biographyOne = "x";
        } else if (fate == 2){
        biographyOne = "x";
        } else if (fate == 3){
        biographyOne = "x";
        } else if (fate == 4){
        biographyOne = "x";
        } else if (fate == 5){
        biographyOne = "x";
        } else if (fate == 6){
        biographyOne = "x";
        } else if (fate == 7){
        biographyOne = "x";
        } else if (fate == 8){
        biographyOne = "x";
        } else if (fate == 9){
        biographyOne = "x";
        } else {
        biographyOne = "x";
    }


//if else statements for destiny

    if (destiny == 1) {
        biographyTwo = "x";
    } else if (destiny == 2){
        biographyTwo = "x";
    } else if (destiny == 3){
        biographyTwo = "x";
    } else if (destiny == 4){
        biographyTwo = "x";
    } else if (destiny == 5){
        biographyTwo = "x";
    } else if (destiny == 6){
        biographyTwo = "x";
    } else if (destiny == 7){
        biographyTwo = "x";
    } else if (destiny == 8){
        biographyTwo = "x";
    } else if (destiny == 9){
        biographyTwo = "x";
    } else {
        biographyTwo = "x";
    }

//if else statements for karma

    if (karma == 1) {
        biographyThree = "x";
    } else if (karma == 2) {
        biographyThree = "x";
    } else if (karma == 3) {
        biographyThree = "x";
    } else if (karma == 4) {
        biographyThree = "x";
    } else if (karma == 5) {
        biographyThree = "x";
    } else if (karma == 6) {
        biographyThree = "x";
    } else if (karma == 7) {
        biographyThree = "x";
    } else if (karma == 8) {
        biographyThree = "x";
    } else if (karma == 9) {
        biographyThree = "x";
    } else {
        biographyThree = "x";
    }


//combines fate destiny and karma into a single string as my life story

lifeStory = biographyOne + " " + biographyTwo + " " + biographyThree;


//sends string into about.html page as text