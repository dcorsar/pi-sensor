/**
 * @Author: John Isaacs <john>
 * @Date:   05-Mar-192019
 * @Filename: lights.js
 * @Last modified by:   john
 * @Last modified time: 05-Mar-192019
 */


 //connects our Pi to the LED Matrix
 const matrix = require('node-sense-hat').Leds;


 //define two colours and then draw them on the matrix
 const O = [0, 0, 0];
 const X = [255, 0, 0];

 const cross = [
 	X, O, O, O, O, O, O, X,
 	O, X, O, O, O, O, X, O,
 	O, O, X, O, O, X, O, O,
 	O, O, O, X, X, O, O, O,
 	O, O, O, X, X, O, O, O,
 	O, O, X, O, O, X, O, O,
 	O, X, O, O, O, O, X, O,
 	X, O, O, O, O, O, O, X,
 ];

//send the matrix to the device
 matrix.setPixels(cross);
