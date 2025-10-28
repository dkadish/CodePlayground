/*
 * IDB Programming: Code Playground
 *
 */

import * as Util from "../util.js";

// State variables are the parts of your program that change over time.
let things = [Util.thing, Util.createThing()];

// Settings variables should contain all of the "fixed" parts of your programs

// Code that runs over and over again
function loop() {
  Util.setPosition(0.5, 0.5, things[0]);
  Util.setSize(50, 50, things[1]);
  Util.setColour(0, 100, 50, 1, things[1]);
  Util.setRoundedness(0, things[1]);
  Util.setRotation(45, things[1]);

  window.requestAnimationFrame(loop);
}

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  
  window.requestAnimationFrame(loop);
}

setup(); // Always remember to call setup()!
