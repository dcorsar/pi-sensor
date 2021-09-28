/**
 * @Author: John Isaacs <john>
 * @Date:   05-Mar-192019
 * @Filename: text.js
 * @Last modified by:   john
 * @Last modified time: 05-Mar-192019
 */

 //connects our Pi to the LED Matrix
 const matrix = require('node-sense-hat').Leds;

 //clear the matrix before we start
 matrix.clear();
 matrix.showMessage("HELLO!!", 0.5, [0,100,255], [150,150,0])
