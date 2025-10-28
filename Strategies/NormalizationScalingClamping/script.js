/*
 * IDB Programming: Code Playground
 *
 */

import * as Util from "../../util.js";

// State variables are the parts of your program that change over time.
let x=0;
let y=0;

// Settings variables should contain all of the "fixed" parts of your programs

function mapSaturation(){
  return y * 100;
}

function mapOpacity(){
  return 1-x;
}

// Code that runs over and over again
function loop() {
  Util.setRoundedness(0);
  Util.setSize(window.innerWidth, window.innerHeight);
  
  let saturation = mapSaturation();
  let opacity = mapOpacity();
  Util.setColour(120, saturation, 50, opacity);
  
  console.log(`Pointer position is (${x}, ${y}). Saturation is ${saturation}. Opacity is ${opacity}.`);
  window.requestAnimationFrame(loop);
}

function handlePointerMove(event){
  // window.innerWidth/Height is the width/height of the browser window
  x = event.x / window.innerWidth;
  y = event.y / window.innerHeight;

  if( y < 0.25 ){
    y = 0;
  } else if (y > 0.75){
    y = 1;
  }
}

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  // Put your event listener code here
  document.addEventListener('pointermove', handlePointerMove)

  window.requestAnimationFrame(loop);
}

setup(); // Always remember to call setup()!
