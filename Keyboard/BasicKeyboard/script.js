/*
 * IDB Programming: Code Playground
 *
 */

import * as Util from "../../util.js";

// State variables are the parts of your program that change over time.
let size = 100;

// Settings variables should contain all of the "fixed" parts of your programs

// Code that runs over and over again
function loop() {
  Util.setSize(size);

  window.requestAnimationFrame(loop);
}

function grow(){
  size += 1;
}

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  // Put your event listener code here
  document.addEventListener('keydown', (event) => {
    if(event.code === 'KeyB'){
      console.log(`Key Down: Code ${event.code} | Key ${event.key} | Key ${event.keyCode} | This is${event.repeat ? '' : ' not'} a repeat press.`);
      grow();
    }
  })

  window.requestAnimationFrame(loop);
}

setup(); // Always remember to call setup()!
