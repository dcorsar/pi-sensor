/**
 * @Author: John Isaacs <john>
 * @Date:   05-Mar-192019
 * @Filename: drawingsensor.js
 * @Last modified by:   john
 * @Last modified time: 05-Mar-192019
 */

 //connects our Pi to the LED Matrix
 const matrix = require('node-sense-hat').Leds;

 //connects us to the sensor device
 const imu = require("node-sense-hat").Imu;

 const IMU = new imu.IMU();

 //asks the sensord device for some data
 IMU.getValue((err, data) => {
   if (err !== null) {
     console.error("Could not read sensor data: ", err);
     return;
   }
   //we can then ask the sensor data for the temperature, pressure and humidity
   console.log("Temp is: ", data.temperature);
   console.log("Pressure is: ", data.pressure);
   console.log("Humidity is: ", data.humidity);

   var temp = Math.round(data.temperature);

 });
