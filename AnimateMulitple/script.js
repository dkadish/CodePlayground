/*
 * IDB Programming: Code Playground
 *
 */

import * as Util from "./util.js";

// State variables are the parts of your program that change over time.
let things = Util.things;

// Settings variables should contain all of the "fixed" parts of your programs

// Code that runs over and over again
function loop() {
  

  window.requestAnimationFrame(loop);
}

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  for( const thing of things ){
      console.log(thing);
    thing.addEventListener("pointerover", function randomPos(event){
      // thing.style.transform(`translate(${Math.random()}% ${Math.random()}%)`)
    })
  }

  window.requestAnimationFrame(loop);
}

setup(); // Always remember to call setup()!
