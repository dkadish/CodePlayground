/*
 * IDB Programming: Code Playground
 *
 */

import * as Util from "../util.js";

// State variables are the parts of your program that change over time.
let x = 0.35;
let y = 0.35;

let currentSize = 100;
let targetSize = 100;

// Settings variables should contain all of the "fixed" parts of your programs
const offSize = 100;
const overSize = 200;

function addTowardsTargetSize(){
  if(currentSize < targetSize){
    currentSize += 5;
  } else if ( currentSize > targetSize ){
    currentSize -= 1;
  }
}

function multiplyTowardsTargetSize(){
  currentSize += (targetSize - currentSize) * 0.1;
}

// Code that runs over and over again
function loop() {
  Util.setPosition(x, y);

  addTowardsTargetSize();
  Util.setSize(currentSize);

  window.requestAnimationFrame(loop);
}

function updateXY(event){
  x = event.x / window.innerWidth;
  y = event.y / window.innerHeight;
}

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  document.addEventListener('pointerdown', updateXY);
  document.addEventListener('pointerup', updateXY);

  Util.thing.addEventListener('pointerover', function (event){
    targetSize = overSize;
  });
  Util.thing.addEventListener('pointerout', (event) => {
    targetSize = offSize;
  });

  window.requestAnimationFrame(loop);
}

setup(); // Always remember to call setup()!
