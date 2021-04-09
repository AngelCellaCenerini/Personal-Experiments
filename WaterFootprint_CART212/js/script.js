"use strict";

/**
Water Footprint
Angel Cella Cenerini

CART212 Final Project
*/

let timerInstructions = 1;
let timerInstructions2 = 5;
let timerButton = 2;

let waltz1 = undefined;

let myFont = undefined;
let lights = undefined;
let avatar = undefined;

let userInput = undefined;
let userInputs = [];


let instructions = {
  active: false
}

let button = {
  active: false
}

let fadedText = {
  x: 375,
  y1: 115,
  y2: 145,
  active: true
}

let highlight = {
  active: false
}

let waterfall = undefined;
let waterfallImage = undefined;
let splash = undefined;
let splashImage = undefined;

// Score
let highScore = undefined;
let score = undefined;

// Objects
let cow = undefined;
let cowImage = undefined;

let state = `active` // Title, Animation, active, Passive

/**
Description of preload
*/
function preload() {

  myFont = loadFont('assets/pixelated.otf');

  lights = loadImage('assets/images/lightGIF6.gif');
  avatar = loadImage('assets/images/clown.png');
  waterfallImage = loadImage('assets/images/waterfall.gif');
  splashImage = loadImage('assets/images/splash2.gif');

  // Objects
  cowImage = loadImage('assets/images/cow.gif');

  waltz1 = loadSound('assets/sounds/bark.wav');

}


/**
Description of setup
*/
function setup() {

  createCanvas(750, 630);
  noStroke();
  textFont(myFont);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  // Objects
  cow = new Product(cowImage);

  // Waterfall
  waterfall = new Waterfall(waterfallImage);

  // Splash
  splash = new Splash(splashImage);
}


/**
Description of draw()
*/
function draw() {
  background(30);

  if (state === `title`){

    titleText();

  }
  else if (state === `animation`){

  }
  else if (state === `active`){

    // User Platform
    push();
    fill(139, 217, 199);
    rect(120, 290, 75, 18);
    pop();

    // Avatar
    image(avatar, 120, 240);

    // Lights
    image(lights, width/2, 155);

    // Faded Score
    if (fadedText.active){
      push();
      fill(255, 25);
      textSize(26);
      text(`WHAT'S NEXT?`, fadedText.x, fadedText.y1);
      text(`+  MORE WATER!`, fadedText.x, fadedText.y2);
      pop();
    }


    // Score
    // push();
    // fill(255);
    // textSize(26);
    // text(`HIGH SCORE`, width/2, 115);
    // text(`+  HIGH SCORE`, width/2, 145);
    // pop();

    // High Score Blinking
    // setInterval(highScoreBlinking, 2000);
    // highScoreBlinking();

    triggerAnimation();

    // Waterfall
    waterfall.update();

    // Splash
    splash.update();

    // Black Border
    push();
    fill(30);
    rect(width/2, 632, 250, 220);
    pop();

    // Base
    push();
    noFill();
    stroke(255);
    strokeWeight(5);
    rect(width/2, 370, 200, 300);
    pop();

    instructionsTimer();

    if (instructions.active){
      push();
      fill(255);
      textSize(23);
      text(`Press  the  ENTER  key!`, width/2, 574);
      pop();
    }

    // Water Dripping

    // Highlight
    if (button.active){
      push();
      fill(255);
      rect(width/2, 574, 210, 30);
      fill(0);
      textSize(23);
      text(`ENTER  key  pressed`, width/2, 570);
      pop();
    }
  }
  else if (state === `passive`){

  }
  else if (state === `credits`){

  }

}

function titleText(){
  // Text
  push();
  fill(255);
  textSize(45);
  text(`WATER  FOOTPRINT`, width/2, height/2);
  textSize(22);
  text(`Press  SPACEBAR  to  start`, width/2, 440);
  pop();
}

// function highScoreBlinking(){
//   // Text
//   push();
//   fill(251, 167, 14);
//   textSize(60);
//   text(`HIGH SCORE`, width/2, 45);
//   pop();
// }

function instructionsTimer(){
  if(frameCount % 60 === 0 && timerInstructions > 0){
    timerInstructions --;
  }
  if(timerInstructions === 0){
   instructions.active = true;
 }
}

function triggerAnimation(){
  // Cow
  cow.display();
  if(cow.active){
  setTimeout( ()=>{
      cow.active = false;
  }, 3000);
}



  // Scores


}

//
function keyPressed(){
  if ( keyCode === 32 && state === `title`){
    state = `active`;
  }

  if ( keyCode === 13 && state === `active`){

    // Add Input
    userInputs.push(userInput);

    // Reset Command
    instructions.active = false;
    timerInstructions = 5;
    // Start Button
    if (keyIsPressed){
      button.active = true;
    }

    // Cow
    if (userInputs.length < 2){
        cow.activate();
    }

    // Waterfall
    waterfall.active = true;

    // Splash
    setTimeout( ()=>{
        splash.active = true;
    }, 2200);

    // Play
    // if (!waltz1.isPlaying()){
    //   waltz1.play();
    // }

    }

  }

function keyReleased(){
  if (state === `active`){
    button.active = false;
  }
}
