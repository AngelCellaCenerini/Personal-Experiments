"use strict";

/**
Water Footprint
Angel Cella Cenerini

CART212 Final Project
*/

let timerInstructions = 1;
let timerButton = 2;
let timerUserInput = 2;

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
  active: false
}

let highlight = {
  active: false
}

let waterfall = undefined;
let waterfallImage = undefined;
let splash = undefined;
let splashImage = undefined;

// Score
let score1 = undefined;
let score2 = undefined;

// Objects
let cow = undefined;
let cowImage = undefined;
let cotton = undefined;
let cottonImage = undefined;

let state = `animation1` // Title, Animation, active, Passive

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
  cottonImage = loadImage('assets/images/cotton.gif');

  waltz1 = loadSound('assets/sounds/bark.wav');

}


/**
Description of setup
*/
function setup() {

  createCanvas(750, 630);
  noStroke();
  noCursor();
  textFont(myFont);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

  // Objects
  cow = new Product(cowImage);
  cotton = new Product(cottonImage);

  // Scores
  let stringA1 = `1KG  BEEF`;
  let stringA2 = `+  15 000  LITRES`;
  score1 = new HighScore(stringA1, stringA2);

  let stringB1 = `1KG  BEEF`;
  let stringB2 = `+  15 000  LITRES`;
  score2 = new HighScore(stringB1, stringB2);

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
      fill(255, 50);
      textSize(26);
      text(`WHAT'S NEXT?`, fadedText.x, fadedText.y1);
      text(`+  MORE WATER!`, fadedText.x, fadedText.y2);
      pop();
    }

    // Scores
    // Cow
    score1.displayHighScore();
    score1.displayScore();

    // Cotton
    score2.displayHighScore();
    score2.displayScore();


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
  else if (state === `animation1`){
    background(0);
    document.getElementById("prova1").style.visibility = `visible`;
  }
  else if (state === `animation2`){
    background(0);
    document.getElementById("quarta").style.visibility = `hidden`;
    document.getElementById("prova1").style.visibility = `hidden`;
    document.getElementById("prova2").style.visibility = `visible`;
  }
  else if (state === `animation3`){
    background(0);
    document.getElementById("quarta").style.visibility = `hidden`;
    document.getElementById("prova2").style.visibility = `hidden`;
    document.getElementById("terza").style.visibility = `visible`;

  }
  else if (state === `animation4`){
    background(0);
    document.getElementById("quarta").style.visibility = `hidden`;
    document.getElementById("terza").style.visibility = `hidden`;
    document.getElementById("quarta").style.visibility = `visible`;

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
      score1.deactivate();
      fadedText.active = true;
  }, 3000);
  }


  // Cotton
  cotton.display();
  if(cotton.active){
  setTimeout(()=>{
    cotton.active = false;
    score2.deactivate();
    fadedText.active = true;
  }, 3000);
  }


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
        setTimeout(()=>{
          score1.activeH = true;
          score1.activeS = true;
        }, 3000);

    }

    if (userInputs.length < 3 && userInputs.length > 1){
        cotton.activate();
        setTimeout(()=>{
          score2.activeH = true;
          score2.activeS = true;
          fadedText.active = false;
        }, 3000);
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

    if ( keyCode === 13 && state === `animation1`){
      state = `animation2`;
    }
    else if ( keyCode === 13 && state === `animation2`){
      state = `animation3`;
    }
    else if ( keyCode === 13 && state === `animation3`){
      state = `animation4`;
    }

  }

function keyReleased(){
  if (state === `active`){
    button.active = false;
  }
}
