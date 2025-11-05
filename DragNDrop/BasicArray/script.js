/*
 * IDB Programming: Code Playground
 *
 */

import * as Util from "../../util.js";

// State variables are the parts of your program that change over time.
let things = [];

// Settings variables should contain all of the "fixed" parts of your programs
const size = 100;

// Code that runs over and over again
function loop() {
  for(const thing of things){
    const {element, x, y, isDragging} = thing;

    if(isDragging){
      Util.setPositionPixels(x, y, element);
    }
  }

  window.requestAnimationFrame(loop);
}

function createThings(n){
  for(let i=0; i<n; i++){
    let thing = Util.createThing();
    things.push({
      element: thing,
      x: Math.random()*window.innerWidth-size/2,
      y: Math.random()*window.innerHeight-size/2,
      hue: i*360/n,
      isDragging: false,
    })
  }
}

// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  createThings(10);

  for(const thing of things){
    const {element, x, y, hue} = thing;
    Util.setPositionPixels(x, y, element);
    Util.setColour(hue, 100, 50, 0.5, element);
    
    document.addEventListener('pointermove', (event) => {
      for(const t of things){
        t.x = event.x-size/2;
        t.y = event.y-size/2;
      }
    });
    element.addEventListener('pointerdown', (event) => {
      console.log("Caught pointer down on a circle.");
      thing.isDragging = true;
    })
    document.addEventListener('pointerup', (event) => {
      for(const t of things){
        t.isDragging = false;
      }
    })
  }

  // Put your event listener code here
  // 

  window.requestAnimationFrame(loop);
}

setup(); // Always remember to call setup()!
