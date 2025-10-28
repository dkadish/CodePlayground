/*
 * IDB Programming: Code Playground
 *
 */

import * as Util from "../../util.js";

// State variables are the parts of your program that change over time.
let size = 100;
let timeoutID = null;

// Settings variables should contain all of the "fixed" parts of your programs

// Code that runs over and over again
function loop() {
  Util.setSize(size);

  window.requestAnimationFrame(loop);
}

function grow(){
  size += 1;
  timeoutID = setTimeout(grow, 10);
}

function shrink(){
  if( size >= 100 ){
    size -= 1;
  }
  timeoutID = setTimeout(shrink, 40);
}

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  timeoutID = setTimeout(shrink, 40);

  // Put your event listener code here
  document.addEventListener('keydown', (event) => {
    if(event.code === 'KeyB' && !event.repeat){
      console.log(`Key Down: Code ${event.code} | Key ${event.key} | Key ${event.keyCode} | This is${event.repeat ? '' : ' not'} a repeat press.`);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(grow, 10);
    }
  })

  document.addEventListener('keyup', (event) => {
    if(event.code === 'KeyB'){
      console.log(`Key Up: Code ${event.code} | Key ${event.key} | Key ${event.keyCode} | This is${event.repeat ? '' : ' not'} a repeat press.`);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(shrink, 40);
    }
  })

  window.requestAnimationFrame(loop);
}

setup(); // Always remember to call setup()!
