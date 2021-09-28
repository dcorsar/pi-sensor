/**
 * @Author: John Isaacs <john>
 * @Date:   05-Mar-192019
 * @Filename: lights.js
 * @Last modified by:   john
 * @Last modified time: 06-Mar-192019
 */

 //connects our Pi to the LED Matrix
 const matrix = require('node-sense-hat').Leds;

//set a value
 const msFrequency = 200;

 //clear the matrix before we start
 matrix.clear();

//sets up some code to repeat at a given interval
 streamInterval = setInterval(working, msFrequency);

//the function to perfrom!
 function working(){

     const x = returnRandom(0,8);
     const y = returnRandom(0,8);
     const red = [255, 0, 0];

     // Set a single pixel
     matrix.setPixel(x, y, red);
 }

//function to return a random number
 function returnRandom(min, max) {
   return parseInt((Math.random() * (max - min) + min).toFixed(0));
 }
