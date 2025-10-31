/*
 * IDB Programming: Code Playground
 *
 */

import * as Util from "../../util.js";

// State variables are the parts of your program that change over time.
let prevKey = null;
let currKey = null;

let size = 100;

// Settings variables should contain all of the "fixed" parts of your programs
const row = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL']

// Code that runs over and over again
function loop() {
  Util.setSize(size);

  window.requestAnimationFrame(loop);
}

function swipeDirection(){
  let prevIndex = row.indexOf(prevKey);
  let currIndex = row.indexOf(currKey);

  console.log(`${prevIndex} -> ${currIndex}`);

  if( currIndex < 0 || prevIndex < 0){
    return 0;
  } else if(currIndex < prevIndex){
    return -1;
  } else if (currIndex > prevIndex){
    return 1;
  } else {
    return 0;
  }
}

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  // Put your event listener code here
  document.addEventListener('keydown', (event) => {
    prevKey = currKey;
    currKey = event.code;

    console.log(`${prevKey} -> ${currKey}`);

    let dir = swipeDirection();
    size += dir*10;
  })

  document.addEventListener('keyup', (event) => {
  })

  window.requestAnimationFrame(loop);
}

setup(); // Always remember to call setup()!
