/*
 * IDB Programming: Code Playground
 *
 */

import * as Util from "../../util.js";

// State variables are the parts of your program that change over time.
let prevTime = performance.now();
let timeDiff = Infinity;

// Settings variables should contain all of the "fixed" parts of your programs

// Code that runs over and over again
function loop() {
  let clampedTD = clamp(timeDiff, 5, 1000);
  let normTD = normalize(clampedTD, 5, 1000);
  let size = scale(1 - normTD, 100, 1000);
  
  Util.setSize(size);
  console.log(size);

  window.requestAnimationFrame(loop);
}

function normalize(value, min, max){
  return (value - min)/(max - min);
}

function scale(value, min, max){
  return value * (max - min) + min;
}

function clamp(value, min, max){
  if(value < min){
    return min;
  } else if (value > max){
    return max;
  }

  return value;
}

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {

  // Put your event listener code here
  document.addEventListener('keydown', (event) => {
    timeDiff = performance.now() - prevTime;
    prevTime = performance.now();
    
    console.log(`Time Difference: ${timeDiff} | Current Time: ${performance.now()}`);
  })

  window.requestAnimationFrame(loop);
}

setup(); // Always remember to call setup()!
