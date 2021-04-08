"use strict";

/**
Water Footprint
Angel Cella Cenerini

CART212 Final Project
*/

let myFont = undefined;
let lights = undefined;
let avatar = undefined;

let fadedText = {
  x: 375,
  y1: 135,
  y2: 165,
  active: true
}

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
  textAlign(CENTER, CENTER);
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
    text(`WATER  FOOTPRINT`, width/2, height/2);
    textSize(22);
    text(`Press  SPACEBAR  to  start`, width/2, 440);
    pop();

  }
  else if (state === `animation`){

  }
  else if (state === `active`){

    // User Platform
    push();
    fill(139, 217, 199);
    rect(120, 320, 75, 18);
    pop();

    // Avatar
    image(avatar, 120, 270);

    // Lights
    image(lights, width/2, 175);

    // Base
    push();
    noFill();
    stroke(255);
    strokeWeight(5);
    rect(width/2, 400, 200, 300);
    pop();

    // Faded Score
    if (fadedText.active){
      push();
      fill(255, 25);
      textSize(26);
      text(`WHAT'S NEXT?`, fadedText.x, fadedText.y1);
      text(`+  MORE WATER!`, fadedText.x, fadedText.y2);
      pop();
    }


    // // Score
    // push();
    // fill(255);
    // textSize(26);
    // text(`HIGH SCORE`, width/2, 135);
    // text(`+  HIGH SCORE`, width/2, 165);
    // pop();

    // High Score Blinking
    let scoreBlink = setInterval(highScoreBlinking, 300);

    // Waterfall

    // Black Border
    push();
    fill(30);
    rect(width/2, 662, 250, 220);
    pop();

    // Instructions
    push();
    fill(255);
    textSize(23);
    text(`Keep  pressing  ENTER!`, width/2, 600);
    pop();

    // Water Dripping



  }
  else if (state === `passive`){

  }
  else if (state === `credits`){

  }

}

function highScoreBlinking(){
  // Text
  push();
  fill(251, 167, 14);
  textSize(60);
  text(`HIGH SCORE`, width/2, 75);
  pop();
}

function keyPressed(){
  if ( keyCode === 32 && state === `title`){
    state = `active`;
  }
}
