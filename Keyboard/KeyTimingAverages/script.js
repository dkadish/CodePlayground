/*
 * IDB Programming: Code Playground
 *
 */

import * as Util from "../../util.js";

// State variables are the parts of your program that change over time.
let prevTimes = [];
let currentSize = 100;

// Settings variables should contain all of the "fixed" parts of your programs

function avgTimeBtwnPresses(){
  let timeDiffs = []
  
  for(let i = 1; i < prevTimes.length; i++){
    let d = prevTimes[i] - prevTimes[i-1];
    timeDiffs.push(d);
  }

  let diffs = 0;
  for(let diff of timeDiffs){
    diffs += diff;
  }

  if(timeDiffs.length === 0){
    return Infinity;
  }

  return diffs / timeDiffs.length;
}

// Code that runs over and over again
function loop() {
  // Calulate the average time between presses
  let timeDiff = avgTimeBtwnPresses();

  let clampedTD = clamp(timeDiff, 5, 1000);
  let normTD = normalize(clampedTD, 5, 1000);
  let targetSize = scale(1 - normTD, 100, 500);
  
  currentSize -= (currentSize - targetSize)*0.01

  Util.setSize(currentSize);
  console.log(currentSize);

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
    prevTimes.push(performance.now());

    setTimeout(() => {
      prevTimes.shift();
    }, 2000);
  })

  window.requestAnimationFrame(loop);
}

setup(); // Always remember to call setup()!
