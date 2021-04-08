"use strict";

/**
Water Footprint
Angel Cella Cenerini

CART212 Final Project
*/

let myFont = undefined;

let state = `title` // Title, Animation, Attive, Passive

/**
Description of preload
*/
function preload() {

  myFont = loadFont('assets/pixelated.otf');

}


/**
Description of setup
*/
function setup() {

  createCanvas(720, 520);
  noStroke();
  textFont(myFont);
  textAlign(RIGHT, RIGHT);
}


/**
Description of draw()
*/
function draw() {
  background(35);

  if (state === `title`){

    // Text
    push();
    fill(255);
    textSize(45);
    textAlign(CENTER, CENTER);
    text(`WATER  FOOTPRINT`, width/2, height/2);
    textSize(22);
    // textAlign(LEFT, LEFT);
    text(`Press  SPACEBAR  to  start`, width/2, 440);
    pop();


  }
  else if (state === `animation`){

  }
  else if (state === `attive`){

  }
  else if (state === `passive`){

  }
  else if (state === `credits`){

  }

}

function keyPressed(){
  if ( keyCode === 32 && state === `title`){
    state = `attive`;
  }
}
