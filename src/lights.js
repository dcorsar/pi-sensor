/**
 * @Author: John Isaacs <john>
 * @Date:   05-Mar-192019
 * @Filename: lights.js
 * @Last modified by:   john
 * @Last modified time: 05-Mar-192019
 */
//connects our Pi to the LED Matrix
 const matrix = require('node-sense-hat').Leds;

//define an x and y value and a colour
 const x = 3;
 const y = 3;
 const red = [255, 0, 0];

 // Set a single pixel
 matrix.setPixel(x, y, red);
