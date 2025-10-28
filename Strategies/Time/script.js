/*
 * IDB Programming: Code Playground
 *
 */

import * as Util from "../../util.js";

// State variables are the parts of your program that change over time.
let hue = 0;
let clicks = [];

// Settings variables should contain all of the "fixed" parts of your programs

function hueFromClicks(){
  let nClicks = clicks.length;

  if(nClicks > 10){
    nClicks = 10;
  }

  return nClicks / 10 * 180;
}

// Code that runs over and over again
function loop() {
  Util.setRoundedness(0);
  Util.setSize(window.innerWidth, window.innerHeight);

  hue = hueFromClicks();
  Util.setColour(hue, 100, 50);

  window.requestAnimationFrame(loop);
}

function removeOneValue(){
  clicks.pop();
}

function handlePointerDown(event){
  // window.innerWidth/Height is the width/height of the browser window
  let x = event.x / window.innerWidth;
  let y = event.y / window.innerHeight;

  clicks.push({x: x, y: y});
  setTimeout(removeOneValue, 2000);

  console.log(clicks);
}

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  // Put your event listener code here
  document.addEventListener('pointerdown', handlePointerDown)

  window.requestAnimationFrame(loop);
}

setup(); // Always remember to call setup()!
