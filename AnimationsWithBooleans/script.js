/*
 * IDB Programming: Code Playground
 *
 */

import * as Util from "./util.js";

// State variables are the parts of your program that change over time.
let hue = 121;
let movingGreenToBlue = true;

// Settings variables should contain all of the "fixed" parts of your programs

// Functions
function checkHueLimits(){
  // Check to see if hue is past one of our boundaries
  // And make moving green to blue false if it's past the blue boundary

  // The cleaner version
  // if( hue <= 120 || hue >= 240){
  //   movingGreenToBlue = !movingGreenToBlue;
  // }

  // The version that's easier to read
  if(hue >= 240){
    movingGreenToBlue = false;
  } else if ( hue <= 120 ){
    movingGreenToBlue = true;
  }
}

function increaseHue(){
  // Make the hue go up
  hue += 1;
}

function decreaseHue(){
  // Make the hue go down
  hue -= 1;
}

// Code that runs over and over again
function loop() {
  Util.setColour(hue);

  checkHueLimits();

  if(movingGreenToBlue){
    increaseHue();
  } else {
    decreaseHue();
  }

  window.requestAnimationFrame(loop);
}

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  window.requestAnimationFrame(loop);
}

setup(); // Always remember to call setup()!
