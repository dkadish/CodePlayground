/*
 * IDB Programming: Code Playground
 *
 */

import * as Util from "../util.js";

// State variables are the parts of your program that change over time.
let ball = {
  hue: 121,
  size: 0,
  movingGreenToBlue: true,
}

let positions = [
  0.1,
  0.8,
  0.5,
  0.3,
  0.8,
  2,
  0.4
];
let i = 0;

// Settings variables should contain all of the "fixed" parts of your programs

// Functions
function checkHueLimits(){
  // Check to see if hue is past one of our boundaries
  // And make moving green to blue false if it's past the blue boundary

  if(ball.hue >= 240){
    ball.movingGreenToBlue = false;
  } else if ( ball.hue <= 120 ){
    ball.movingGreenToBlue = true;
  }

}

function increaseHue(){
  // Make the hue go up
  ball.hue += 1;
}

function decreaseHue(){
  // Make the hue go down
  ball.hue -= 1;
}

// Code that runs over and over again
function loop() {
  Util.setColour(ball.hue);

  checkHueLimits();

  if(ball.movingGreenToBlue){
    increaseHue();
  } else {
    decreaseHue();
  }

  ball.size += 0.1;
  Util.setSize(ball.size);

  window.requestAnimationFrame(loop);
}

function jumpAround(){
  if(i < positions.length - 1){
    i += 1;
  } else {
    i = 0;
  }

  let y_index = Math.floor(Math.random() * positions.length);

  Util.setPosition(positions[i], positions[y_index]);

  setTimeout(jumpAround, 1000);
}

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  setTimeout(jumpAround, 1000);
  window.requestAnimationFrame(loop);
}

setup(); // Always remember to call setup()!
