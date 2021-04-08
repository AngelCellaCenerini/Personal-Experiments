"use strict";

/**
Water Footprint
Angel Cella Cenerini

CART212 Final Project
*/

let myFont = undefined;
let lights = undefined;
let avatar = undefined;

let state = `active` // Title, Animation, active, Passive

/**
Description of preload
*/
function preload() {

  myFont = loadFont('assets/pixelated.otf');

  lights = loadImage('assets/images/lightGIF6.gif');
  avatar = loadImage('assets/images/clown.png');

}


/**
Description of setup
*/
function setup() {

  createCanvas(750, 700);
  noStroke();
  textFont(myFont);
  textAlign(RIGHT, RIGHT);
  rectMode(CENTER);
  imageMode(CENTER);
}


/**
Description of draw()
*/
function draw() {
  background(30);

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
  else if (state === `active`){

    // User Platform
    push();
    fill(139, 217, 199);
    rect(150, 330, 75, 18);
    pop();

    // Avatar
    image(avatar, 150, 280);

    // Lights
    image(lights, width/2, 180);

    // Base
    push();
    noFill();
    stroke(255);
    strokeWeight(5);
    rect(width/2, 400, 200, 300);
    pop();

    // Text
    push();
    fill(251, 171, 14);
    textSize(45);
    textAlign(CENTER, CENTER);
    text(`HIGH SCORE`, width/2, 80);
    pop();



  }
  else if (state === `passive`){

  }
  else if (state === `credits`){

  }

}

function keyPressed(){
  if ( keyCode === 32 && state === `title`){
    state = `active`;
  }
}
