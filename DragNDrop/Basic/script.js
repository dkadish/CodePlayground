/*
 * IDB Programming: Code Playground
 *
 */

import * as Util from "../../util.js";

// State variables are the parts of your program that change over time.
let x=0;
let y=0;
let isDragging = false;
let thing = Util.thing;

// Settings variables should contain all of the "fixed" parts of your programs
const size = 100;

// Code that runs over and over again
function loop() {
  if(isDragging){
    Util.setPositionPixels(x-size/2, y-size/2);
  }

  window.requestAnimationFrame(loop);
}

function handlePointerMove(event){
  // window.innerWidth/Height is the width/height of the browser window
  x = event.x;
  y = event.y;
}

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  // Put your event listener code here
  document.addEventListener('pointermove', handlePointerMove);
  thing.addEventListener('pointerdown', (event) => {
    isDragging = true;
  })
  thing.addEventListener('pointerup', (event) => {
    isDragging = false;
  })


  window.requestAnimationFrame(loop);
}

setup(); // Always remember to call setup()!
