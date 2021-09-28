/**
 * @Author: John Isaacs <john>
 * @Date:   05-Mar-192019
 * @Filename: drawingsensor.js
 * @Last modified by:   john
 * @Last modified time: 06-Mar-192019
 */

//connects us to the sensor device
const imu = require("node-sense-hat").Imu;
//connects our Pi to the LED Matrix
const matrix = require('node-sense-hat').Leds;

const IMU = new imu.IMU();

//set a value
 const msFrequency = 5000;

//sets up some code to repeat at a given interval
streamInterval = setInterval(working, msFrequency);

//the function to perfrom!
function working() {
  //asks the sensor device for some data
  IMU.getValue((err, data) => {
    if (err !== null) {
      console.error("Could not read sensor data: ", err);
      return;
    }

    var temp = Math.round(data.temperature);
    matrix.clear();
    matrix.showMessage(temp + ".C", 0.5, [0, 100, 255], [150, 150, 0])
  });

}
