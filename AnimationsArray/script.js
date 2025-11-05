/*
 * IDB Programming: Code Playground
 *
 */

import * as Util from "../util.js";

// State variables are the parts of your program that change over time.
let circles = [{element: Util.thing, opacity: 1}];

// Settings variables should contain all of the "fixed" parts of your programs

function fade(circle){
  let {element, opacity} = circle

  opacity *= 0.99;
  Util.setColour(320, 100, 50, opacity, element);

  circle.opacity = opacity;
}

// Code that runs over and over again
function loop() {
  for(const circle of circles){
    fade(circle);
  }

  window.requestAnimationFrame(loop);
}

// In pixels
function placeNewCircle(x, y){
  let element = Util.createThing();
  Util.setPositionPixels(x, y, element);
  circles.push({element: element, opacity: 1});
}

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  document.addEventListener('pointerdown', (event) => {
    placeNewCircle(event.x - 50, event.y - 50);
  })

  window.requestAnimationFrame(loop);
}

setup(); // Always remember to call setup()!
