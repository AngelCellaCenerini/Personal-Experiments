"use strict";

/**
Water Footprint
Angel Cella Cenerini

CART212 Final Project
*/

let timerInstructions = 1;
let timerButton = 2;
let timerUserInput = 2;
let timerActive = 30;
let timerPassive = 10;
let timerAnimation1 = 1;
let timerAnimation2 = 1;
let timerAnimation3 = 1;
let timerAnimation4 = 3;
let timerScreen1 = 2;

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
let drop = undefined;
let dropImage = undefined;

// Score
let score1 = undefined;
let score2 = undefined;

// Objects
let cow = undefined;
let cowImage = undefined;
let cotton = undefined;
let cottonImage = undefined;

// Finale
let screen1 = {
  active: false
}
let screenImage = undefined;


let fadingEffect = {
  x: 0,
  y: 0,
  width: 800,
  height: 700,
  vx: 0,
  vy: 0,
  opacity: 255,
  active: false
}

let state = `title` // Title, Animation, active, Passive

/**
Description of preload
*/
function preload() {

  myFont = loadFont('assets/pixelated.otf');

  lights = loadImage('assets/images/lightGIF6.gif');
  avatar = loadImage('assets/images/clown.png');
  waterfallImage = loadImage('assets/images/waterfall.gif');
  splashImage = loadImage('assets/images/splash2.gif');
  dropImage = loadImage('assets/images/goccia.png');

  // Objects
  cowImage = loadImage('assets/images/cow.gif');
  cottonImage = loadImage('assets/images/cotton.gif');

  // Finale
  screenImage = loadImage('assets/images/prova.gif');

  // SFX
  waltz1 = loadSound('assets/sounds/bark.wav');

}


/**
Description of setup
*/
function setup() {

  createCanvas(750, 630);
  noStroke();
  // noCursor();
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

  // Drop
  drop = new Drop(dropImage);



}


/**
Description of draw()
*/
function draw() {
  background(30);

  if (state === `title`){

    titleText();


  }
  else if (state === `active`){

    activeTimer();

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

    // Drop
    drop.update();

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
    passiveTimer();
  }
  else if (state === `animation1`){
    windowResized();
    animation1Timer();
    image(screenImage, width/4, height/2, 645, 542);
    image(screenImage, 3*width/4, height/2, 645, 542);
  }
  else if (state === `animation2`){
    background(0);
    animation2Timer();
    image(screenImage, width/6, height/2, 450, 378);
    image(screenImage, width/2, height/2, 450, 378);
    image(screenImage, 5*width/6, height/2, 450, 378);
  }
  else if (state === `animation3`){
    background(0);
    animation3Timer();
    image(screenImage, width/6, height/4, 375, 315);
    image(screenImage, width/2, height/4, 375, 315);
    image(screenImage, 5*width/6, height/4, 375, 315);
    image(screenImage, width/6, 3*height/4, 375, 315);
    image(screenImage, width/2, 3*height/4, 375, 315);
    image(screenImage, 5*width/6, 3*height/4, 375, 315);
  }
  else if (state === `animation4`){
    background(0);
    animation4Timer();
    image(screenImage, width/4, height/6, 250, 210);
    image(screenImage, width/2, height/6, 250, 210);
    image(screenImage, 3*width/4, height/6, 250, 210);
    image(screenImage, width/4, height/2, 250, 210);
    image(screenImage, width/2, height/2, 250, 210);
    image(screenImage, 3*width/4, height/2, 250, 210);
    image(screenImage, width/4, 5*height/6, 250, 210);
    image(screenImage, width/2, 5*height/6, 250, 210);
    image(screenImage, 3*width/4, 5*height/6, 250, 210);

    screen1Timer();
    coverPic();
  }
  else if (state === `credits`){

    background(0);
    endingText();
    fadeIn();
    setTimeout( ()=>{
      fadingEffect.active = true;
    }, 2000);
  }

}

function fadeIn(){

  let fading = 0.5;

  push();
  fill(0, fadingEffect.opacity);
  fadingEffect.x = width/2;
  fadingEffect.y = height/2;
  rect(fadingEffect.x, fadingEffect.y, fadingEffect.width, fadingEffect.height);
  pop();

 if (fadingEffect.active){
  fadingEffect.opacity -= fading;
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

function activeTimer(){
  if(frameCount % 60 === 0 && timerActive > 0){
    timerActive --;
  }
  if(timerActive === 0){
   state = `passive`;
 }
}

function passiveTimer(){
  if(frameCount % 60 === 0 && timerPassive > 0){
    timerPassive --;
  }
  if(timerPassive === 0){
   state = `animation1`;
 }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function animation1Timer(){
  if(frameCount % 60 === 0 && timerAnimation1 > 0){
    timerAnimation1 --;
  }
  if(timerAnimation1 === 0){
   state = `animation2`;
 }
}
function animation2Timer(){
  if(frameCount % 60 === 0 && timerAnimation2 > 0){
    timerAnimation2 --;
  }
  if(timerAnimation2 === 0){
   state = `animation3`;
 }
}
function animation3Timer(){
  if(frameCount % 60 === 0 && timerAnimation3 > 0){
    timerAnimation3 --;
  }
  if(timerAnimation3 === 0){
   state = `animation4`;
 }
}
function animation4Timer(){
  if(frameCount % 60 === 0 && timerAnimation4 > 0){
    timerAnimation4 --;
  }
  if(timerAnimation4 === 0){
   state = `credits`;
 }
}

function screen1Timer(){
  if(frameCount % 60 === 0 && timerScreen1 > 0){
    timerScreen1 --;
  }
  if(timerScreen1 === 0){
   screen1.active = true;
 }
}

function coverPic(){
  push();
  fill(30);
  if (screen1.active){
    rect( width/4, height/6, 250, 210);
  }
  rect(width/2, height/6, 250, 210);
  rect(3*width/4, height/6, 250, 210);
  rect(width/4, height/2, 250, 210);
  rect(width/2, height/2, 250, 210);
  rect(3*width/4, height/2, 250, 210);
  rect(width/4, 5*height/6, 250, 210);
  rect(width/2, 5*height/6, 250, 210);
  rect(3*width/4, 5*height/6, 250, 210);


  // Text
  fill(255);
  textSize(32);
  if (screen1.active){
    text(`ITALY
      30 L  per  day`,  width/4, height/6);
  }
  text(`ITALY
    30 L  per  day`, width/2, height/6);
  text(`ITALY
    30 L  per  day`, 3*width/4, height/6);
  text(`ITALY
    30 L  per  day`, width/4, height/2);
  text(`ITALY
    30 L  per  day`, width/2, height/2);
  text(`ITALY
    30 L  per  day`, 3*width/4, height/2);
  text(`ITALY
    30 L  per  day`, width/4, 5*height/6);
  text(`ITALY
    30 L  per  day`, width/2, 5*height/6);
  text(`ITALY
    30 L  per  day`, 3*width/4, 5*height/6);
  pop();
}

function endingText(){
  // Text
  push();
  fill(255);
  textSize(45);
  text(`WATER  FOOTPRINT`, width/2, height/2);
  textSize(22);
  text(`CART212 -  Angel  Cella  Cenerini`, width/2, 440);
  pop();
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
    else if ( keyCode === 13 && state === `animation4`){
      state = `credits`;
    }

  }

function keyReleased(){
  if (state === `active`){
    button.active = false;
  }
}
