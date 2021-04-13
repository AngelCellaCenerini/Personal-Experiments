"use strict";

/**
Water Footprint
Angel Cella Cenerini

CART212 Final Project
*/

let timerInstructions = 4;
let timerInstructions2 = 25;
let timerUserInput = 2;
let timerActive = 100;
let timerPassive = 10;
let timerAnimation1 = 1;
let timerAnimation2 = 1;
let timerAnimation3 = 1;
let timerAnimation4 = 10;
let timerScreen1 = 2;
let timerScreen2 = 2;
let timerScreen3 = 2;
let timerScreen4 = 4;
let timerScreen5 = 4;
let timerScreen6 = 4;
let timerScreen7 = 6;
let timerScreen8 = 6;
let timerScreen9 = 6;



let waltzIntro = undefined;
let waltzInterruption = undefined;
let waltz = undefined;

let myFont = undefined;
let lights = undefined;
let avatar = undefined;

let userInput = undefined;
let userInputs = [];

let stopCommand = undefined;
let stopCommands = [];


let interruption = {
  active: false
}

let instructions = {
  active: false
}

let instructions2 = {
  active: false
}

let button = {
  active: false
}
let button2 = {
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
let bigWaterfall = undefined;
let bigWaterfallImage = undefined;
let splash = undefined;
let splashImage = undefined;
let drop = undefined;
let drop2 = undefined;
let dropImage = undefined;
let waves = undefined;
let waveRImage = undefined;
let waveLImage = undefined;

// Scores
let score1 = undefined;
let score2 = undefined;
let score3 = undefined;
let score4 = undefined;
let score5 = undefined;
let score6 = undefined;
let score7 = undefined;
let score8 = undefined;


// Objects
let coffee = undefined;
let coffeeImage = undefined;
let apple = undefined;
let appleImage = undefined;
let bread = undefined;
let breadImage = undefined;
let cotton = undefined;
let cottonImage = undefined;
let chocolate = undefined;
let chocolateImage = undefined;
let phone = undefined;
let phoneImage = undefined;
let jeans = undefined;
let jeansImage = undefined;
let cow = undefined;
let cowImage = undefined;


// Messages
let message = undefined;
let message2 = undefined;
let message3 = undefined;
let message4 = undefined;
let message5 = undefined;
let message6 = undefined;

// Finale
let screen1 = {
  active: false
}
let screen2 = {
  active: false
}
let screen3 = {
  active: false
}
let screen4 = {
  active: false
}
let screen5 = {
  active: false
}
let screen6 = {
  active: false
}
let screen7 = {
  active: false
}
let screen8 = {
  active: false
}
let screen9 = {
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

let state = `animation1` // Title, Animation, active, Passive

/**
Description of preload
*/
function preload() {

  myFont = loadFont('assets/pixelated.otf');

  lights = loadImage('assets/images/lightGIF6.gif');
  avatar = loadImage('assets/images/clown.png');
  waterfallImage = loadImage('assets/images/waterfall.gif');
  bigWaterfallImage = loadImage('assets/images/bigWaterfall.gif');
  splashImage = loadImage('assets/images/splash2.gif');
  dropImage = loadImage('assets/images/goccia.png');
  waveRImage = loadImage('assets/images/waveR.gif');;
  waveLImage = loadImage('assets/images/waveL.gif');;

  // Objects
  coffeeImage = loadImage('assets/images/cotton.gif');
  appleImage = loadImage('assets/images/cotton.gif');
  breadImage = loadImage('assets/images/cotton.gif');
  cottonImage = loadImage('assets/images/cotton.gif');
  chocolateImage = loadImage('assets/images/cotton.gif');
  phoneImage = loadImage('assets/images/cotton.gif');
  jeansImage = loadImage('assets/images/cotton.gif');
  cowImage = loadImage('assets/images/cow.gif');

  // Finale
  screenImage = loadImage('assets/images/prova.gif');

  // SFX
  waltzIntro = loadSound('assets/sounds/intro.mp3');
  waltzInterruption = createAudio('assets/sounds/interruptionB.mp3');
  waltz = createAudio('assets/sounds/soundtrack.mp3');

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

  userStartAudio();

  // Objects
  coffee = new Product(coffeeImage);
  apple = new Product(appleImage);
  bread = new Product(breadImage);
  cotton = new Product(cottonImage);
  chocolate = new Product(chocolateImage);
  phone = new Product(phoneImage);
  jeans = new Product(jeansImage);
  cow = new Product(cowImage);

  // Scores
  // Coffee
  let stringC1 = `1 CUP (125 ml)  COFFEE`;
  let stringC2 = `+  132  LITRES`;
  score3 = new HighScore(stringC1, stringC2);
  // Apple
  let stringD1 = `1  APPLE`;
  let stringD2 = `+  70  LITRES`;
  score4 = new HighScore(stringD1, stringD2);
  // Bread
  let stringE1 = `1KG  BREAD`;
  let stringE2 = `+  1600  LITRES`;
  score5 = new HighScore(stringE1, stringE2);
  // Cotton
  let stringB1 = `1KG  COTTON  FABRIC`;
  let stringB2 = `+  10 000  LITRES`;
  score2 = new HighScore(stringB1, stringB2);
  // Chocolate
  let stringF1 = `100G  CHOCOLATE`;
  let stringF2 = `+  1700  LITRES`;
  score6 = new HighScore(stringF1, stringF2);
  // Phone
  let stringG1 = `1  SMARTPHONE`;
  let stringG2 = `+  12 000  LITRES`;
  score7 = new HighScore(stringG1, stringG2);
  // Jeans
  let stringH1 = `1  PAIR`;
  let stringH2 = `+  8 000  LITRES`;
  score8 = new HighScore(stringH1, stringH2);
  // Cow
  let stringA1 = `1KG  BEEF`;
  let stringA2 = `+  15 000  LITRES`;
  score1 = new HighScore(stringA1, stringA2);



  // Waterfall
  waterfall = new Waterfall(waterfallImage);

  // Big Waterfall
  bigWaterfall = new BigWaterfall(bigWaterfallImage);

  // Splash
  splash = new Splash(splashImage);

  // Drops
  drop = new Drop(dropImage);
  drop2 = new Drop(dropImage);

  // Side Waves
  waves = new Wave(waveLImage, waveRImage);

  // Message
  message = new Message();
  message2 = new MessageS();
  message3 = new MessageT();
  message4 = new MessageFo();
  message5 = new MessageFi();
  message6 = new MessageSi();



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

    if(userInputs.length > 0){
      activeTimer();
    }

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
    // Coffee
    score3.displayHighScore();
    score3.displayScore();
    // Apple
    score4.displayScore();
    // Bread
    score5.displayHighScore();
    score5.displayScore();
    // Cotton
    score2.displayHighScore();
    score2.displayScore();
    // Chocolate
    score6.displayScore();
    // Phone
    score7.displayHighScore();
    score7.displayScore();
    // Jeans
    score8.displayScore();
    // Cow
    score1.displayScore();



    triggerAnimation();

    // Waterfall
    waterfall.update();

    // Splash
    splash.update();

    // Drop
    // drop.update();

    // Black Border
    push();
    fill(30);
    rect(width/2, 632, 250, 220);
    pop();

    // Waterfall
    // bigWaterfall.update();

    // Base
    push();
    noFill();
    stroke(255);
    strokeWeight(5);
    rect(width/2, 370, 200, 300);
    pop();

    instructionsTimer();
    instructionsTimer2();

    if (instructions.active === true && instructions2.active === false){
      push();
      fill(255);
      textSize(23);
      text(`Press  the  ENTER  key!`, width/2, 574);
      pop();
    }

    // Stop Command
    if (instructions2.active){
      push();
      fill(255);
      textSize(23);
      text(`Press  the  BACKSPACE  key
      to  stop  the  water  consumption!`, width/2, 574);
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

    if (button2.active){
      push();
      fill(255);
      rect(width/2, 574, 230, 30);
      fill(0);
      textSize(23);
      text(`BACKSPACE  key  pressed`, width/2, 570);
      pop();
    }

    // Message
    message.update();
    message2.update();
    message3.update();
    message4.update();
    message5.update();
    message6.update();

    // Side Waves
    // waves.update();

    // interruption
    if(interruption.active){
      displayInterruption();
    }

  }
  else if (state === `interruption`){
    // waltz.pause();
    // interruptionTimer();

    //
    // displayInterruption();



    // playMusic();
    // waltz.pause();

    // if(waltz.isPlaying){
    //   waltz.pause();
    // }

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

    // Screens
    screen1Timer();
    screen2Timer();
    screen3Timer();
    screen4Timer();
    screen5Timer();
    screen6Timer();
    screen7Timer();
    screen8Timer();
    screen9Timer();

    // Squares
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
  if (!instructions2.active){
    if(frameCount % 60 === 0 && timerInstructions > 0){
      timerInstructions --;
    }
    if(timerInstructions === 0){
      if (userInputs.length < 6){
        instructions.active = true;
      }
  }

   // instructions2.active = false;
   // timerInstructions2 = 8;



   // if(userInputs.length > 1){
   //
   //   // Add Input
   //   userInputs.push(userInput);
   //   // Waterfall
   //   waterfall.active = true;
   //
   //   // Splash
   //   setTimeout( ()=>{
   //       splash.active = true;
   //   }, 2200);
   // }

 }
}
function instructionsTimer2(){
  if(frameCount % 60 === 0 && timerInstructions2 > 0){
    timerInstructions2 --;
  }
  if(timerInstructions2 === 0){
    if(stopCommands.length < 3){
      instructions2.active = true;
      timerInstructions = 4;
    }
 }
}

function triggerAnimation(){

  // Coffee
  coffee.display();
  if(coffee.active){
  setTimeout( ()=>{
      coffee.active = false;
      score3.deactivate();
      fadedText.active = true;
  }, 3500);
  }

  // Apple
  apple.display();
  if(apple.active){
  setTimeout( ()=>{
      apple.active = false;
      score4.deactivate();
      fadedText.active = true;
  }, 3500);
  }

  // Bread
  bread.display();
  if(bread.active){
  setTimeout( ()=>{
      bread.active = false;
      score5.deactivate();
      fadedText.active = true;
  }, 3500);
  }

  // Cotton
  cotton.display();
  if(cotton.active){
  setTimeout(()=>{
    cotton.active = false;
    score2.deactivate();
    fadedText.active = true;
  }, 3500);
  }

  // Chocolate
  chocolate.display();
  if(chocolate.active){
  setTimeout( ()=>{
      chocolate.active = false;
      score6.deactivate();
      fadedText.active = true;
  }, 3500);
  }

  // Phone
  phone.display();
  if(phone.active){
  setTimeout( ()=>{
      phone.active = false;
      score7.deactivate();
      fadedText.active = true;
  }, 3500);
  }

  // // Cow
  // cow.display();
  // if(cow.active){
  // setTimeout( ()=>{
  //     cow.active = false;
  //     score1.deactivate();
  //     fadedText.active = true;
  // }, 3000);
  // }



}
function automaticAnimation(){

  // Jeans
  jeans.display();
  if(jeans.active){
  setTimeout( ()=>{
      jeans.active = false;
      score1.deactivate();
      fadedText.active = true;
  }, 3500);
  }

  // Cow
  cow.display();
  if(cow.active){
  setTimeout( ()=>{
      cow.active = false;
      score1.deactivate();
      fadedText.active = true;
  }, 3500);
  }

}

function activeTimer(){
  if(frameCount % 60 === 0 && timerActive > 0){
    timerActive --;
  }
  if(timerActive === 0){
   state = `animation1`;
 }
}

function displayInterruption(){

  // Redraw Canvas
  push();
  fill(30);
  rect(width/2, height/2, 750, 630);
  pop();

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
    push();
    fill(255, 50);
    textSize(26);
    text(`OH`, fadedText.x, fadedText.y1);
    text(`IT  STOPPED`, fadedText.x, fadedText.y2);
    pop();

    // Drop
    drop2.timing = 200;
    drop2.update();

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

    // // Return to Active
    // setTimeout( ()=>{
    //   interruption.active = false;
    //   console.log(interruption.active);
    // }, 4000);

}

function returnToActive(){
  // Return to Active

  setTimeout( ()=>{
    interruption.active = false;
    // if(waltzInterruption.isPlaying){
      waltzInterruption.stop();
      waltz.loop();
  }, 5000);
}

function returnToActive2(){
  // Return to Active

  setTimeout( ()=>{
    interruption.active = false;
    // if(waltzInterruption.isPlaying){
      waltzInterruption.stop();
      waltz.loop();
  }, 2500);
}

// function interruptionTimer(){
//   if(frameCount % 60 === 0 && timerInterruption > 0){
//     timerInterruption --;
//   }
//   if(timerInterruption === 0){
//       state = `active`;
//       playMusic();
//       // timerInterruption = 2;
//       if (waltzInterruption.isPlaying){
//         waltzInterruption.stop();
//       }
//
//  }
// }

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
function screen2Timer(){
  if(frameCount % 60 === 0 && timerScreen2 > 0){
    timerScreen2 --;
  }
  if(timerScreen2 === 0){
   screen2.active = true;
 }
}
function screen3Timer(){
  if(frameCount % 60 === 0 && timerScreen3 > 0){
    timerScreen3 --;
  }
  if(timerScreen3 === 0){
   screen3.active = true;
 }
}
function screen4Timer(){
  if(frameCount % 60 === 0 && timerScreen4 > 0){
    timerScreen4 --;
  }
  if(timerScreen4 === 0){
   screen4.active = true;
 }
}
function screen5Timer(){
  if(frameCount % 60 === 0 && timerScreen5 > 0){
    timerScreen5 --;
  }
  if(timerScreen5 === 0){
   screen5.active = true;
 }
}
function screen6Timer(){
  if(frameCount % 60 === 0 && timerScreen6 > 0){
    timerScreen6 --;
  }
  if(timerScreen6 === 0){
   screen6.active = true;
 }
}
function screen7Timer(){
  if(frameCount % 60 === 0 && timerScreen7 > 0){
    timerScreen7 --;
  }
  if(timerScreen7 === 0){
   screen7.active = true;
 }
}
function screen8Timer(){
  if(frameCount % 60 === 0 && timerScreen8 > 0){
    timerScreen8 --;
  }
  if(timerScreen8 === 0){
   screen8.active = true;
 }
}
function screen9Timer(){
  if(frameCount % 60 === 0 && timerScreen9 > 0){
    timerScreen9 --;
  }
  if(timerScreen9 === 0){
   screen9.active = true;
 }
}




function coverPic(){
  push();
  fill(30);
  if (screen1.active){
    rect( width/4, height/6, 250, 210);
  }
  if (screen2.active){
  rect(width/2, height/6, 250, 210);
  }
  if (screen3.active){
  rect(3*width/4, height/6, 250, 210);
  }
  if (screen4.active){
  rect(width/4, height/2, 250, 210);
  }
  if (screen5.active){
  rect(width/2, height/2, 250, 210);
  }
  if (screen6.active){
  rect(3*width/4, height/2, 250, 210);
  }
  if (screen7.active){
  rect(width/4, 5*height/6, 250, 210);
  }
  if (screen8.active){
  rect(width/2, 5*height/6, 250, 210);
  }
  if (screen9.active){
  rect(3*width/4, 5*height/6, 250, 210);
  }


  // Text
  fill(255);
  textSize(28);
  if (screen1.active){
    text(`CHINA
      362  trillion  gallons
      per  year`,  width/4, height/6);
  }
  if (screen2.active){
  text(`USA
    216  trillion  gallons
    per  year`, width/2, height/6);
  }
  if (screen3.active){
  text(`BRAZIL
    95  trillion  gallons
    per  year`, 3*width/4, height/6);
  }
  if (screen4.active){
  text(`RUSSIA
    71  trillion  gallons
    per  year`, width/4, height/2);
  }
  if (screen5.active){
  text(`MEXICO
    53  trillion  gallons
    per  year`, width/2, height/2);
  }
  if (screen6.active){
  text(`INDIA
    30  trillion  gallons
    per  year`, 3*width/4, height/2);
  }
  if (screen7.active){
  text(`ENGLAND / FRANCE
    20  trillion  gallons
    per  year`, width/4, 5*height/6);
  }
  if (screen8.active){
  text(`CANADA
    19  trillion  gallons
    per  year`, width/2, 5*height/6);
  }
  if (screen9.active){
  text(`AUSTRALIA
    12  trillion  gallons
    per  year`, 3*width/4, 5*height/6);
  }
  pop();
}

function displayAlerts(){
  push();
  fill(255);
  rect();
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
    waltzIntro.loop();
  }

  if ( keyCode === 13 && state === `active`){

    // Sound
    if (waltzIntro.isPlaying){
      waltzIntro.stop();
    }
    if(userInputs.length < 1){
      // playMusic();
      waltz.loop();

    }


    if(userInputs.length < 6 && instructions2.active === false){
      // Add Input
      userInputs.push(userInput);
      // Waterfall
      waterfall.active = true;

      // Splash
      setTimeout( ()=>{
          splash.active = true;
      }, 2200);
    }


    // Reset Command
    instructions.active = false;
    timerInstructions = 7;

    // Start Button
    if (keyIsPressed && button2.active === false && instructions2.active === false){
      button.active = true;
      // instructions2.active = false;
      // timerInstructions2 = 8;
    }

    if (!instructions2.active){
      // Coffee
      if (userInputs.length < 2 && interruption.active === false){
          coffee.activate();
          setTimeout(()=>{
            score3.activeH = true;
            score3.activeS = true;
            fadedText.active = false;
          }, 3000);

      }
      // Apple
      if ((userInputs.length < 3 && userInputs.length > 1) && interruption.active === false){
          apple.activate();
          setTimeout(()=>{
            score4.activeS = true;
            fadedText.active = false;
          }, 3000);

      }
      // Bread
      if ((userInputs.length < 4 && userInputs.length > 2) && interruption.active === false){
          bread.activate();
          setTimeout(()=>{
            score5.activeH = true;
            score5.activeS = true;
            fadedText.active = false;
          }, 3000);

      }
      // Cotton
      if ((userInputs.length < 5 && userInputs.length > 3) && interruption.active === false){
          cotton.activate();
          setTimeout(()=>{
            score2.activeH = true;
            score2.activeS = true;
            fadedText.active = false;
          }, 3000);
      }
      // Chocolate
      if ((userInputs.length < 6 && userInputs.length > 4) && interruption.active === false){
          chocolate.activate();
          setTimeout(()=>{
            score6.activeS = true;
            fadedText.active = false;
          }, 3000);
      }
      // Phone
      if ((userInputs.length < 7 && userInputs.length > 5) && interruption.active === false){
          // userInputs.push(userInput);
          phone.activate();
          setTimeout(()=>{
            score7.activeH = true;
            score7.activeS = true;
            fadedText.active = false;
          }, 3000);
      }
    }



    // Passive Mode
    // // Cow
    // if (userInputs.length < 2){
    //     cow.activate();
    //     setTimeout(()=>{
    //       score1.activeH = true;
    //       score1.activeS = true;
    //     }, 3000);
    //
    // }

    // // Waterfall
    // waterfall.active = true;
    //
    // // Splash
    // setTimeout( ()=>{
    //     splash.active = true;
    // }, 2200);


    }
    else if (keyCode === 8 && state === `active`){

      if(instructions2.active){

        // Reset Stop Command
        instructions2.active = false;
        if(stopCommands.length < 3 && userInputs.length < 6){
          timerInstructions2 = 13;
        }
        else if(stopCommands.length < 4 && userInputs.length < 7){
          timerInstructions2 = 26;
        }

        timerInstructions = 4;
        if(stopCommands.length < 4){
            button2.active = true;
        }


        if(button2.active){
          instructions2.active = false;
        }



        drop2.y = -5;
        drop2.vy = 0;


        setTimeout( ()=>{
          if(stopCommands.length < 2){
          interruption.active = true;
          // if(waltz.isPlaying){
            waltz.pause();
            waltzInterruption.loop();
            returnToActive();
        }
        else if(stopCommands.length < 4){
          interruption.active = true;
          // if(waltz.isPlaying){
            waltz.pause();
            waltzInterruption.loop();
            returnToActive2();
        }
      }, 1000);
      }

    //   // Reset Stop Command
    //   instructions2.active = false;
    //   timerInstructions2 = 10;
    //   timerInstructions = 3;
    //   button2.active = true;
    //
    //   drop2.y = -5;
    //   drop2.vy = 0;
    //
    //
    //   setTimeout( ()=>{
    //     if(stopCommands.length < 4){
    //     interruption.active = true;
    //     // if(waltz.isPlaying){
    //       waltz.pause();
    //       waltzInterruption.loop();
    //       returnToActive();
    //       // playMusic();
    //     // }
    //
    //     // waltz.pause();
    //     // setTimeout( ()=>{
    //     //   if(waltz.isPaused){
    //     //     waltz.loop();
    //     //   }
    //     // }, 4000);
    //     // waltzInterruption.play();
    //     // playMusic();
    //   }
    // }, 1000);

      //   setTimeout( ()=>{
      //
      // }, 1000);

      // setTimeout( ()=>{
      //   if(stopCommands.length < 4){
      //   interruption.active = true;
      //   setTimeout( ()=>{
      //     interruption.active = false;
      //     waltzInterruption.pause();
      //     if (waltz.isPaused){
      //       waltz.loop();
      //     }
      //
      //     console.log(interruption.active);
      //   }, 4000);
      //   playMusic();
      //   }
      // }, 1000);
      //
      // // Keep Track of Inputs
      if (stopCommands.length < 4){
        stopCommands.push(stopCommand);
      }


      // if(stopCommands.length < 4){
      //
      // }

    }

  }

function keyReleased(){
  if (state === `active` && button.active === true && keyCode === 13){
    if(stopCommands.length < 3){
      button.active = false;
    }
    else{
      // return;

      // Waterfall
      waterfall.active = true;

      // Splash
      setTimeout( ()=>{
          splash.active = true;
      }, 2200);

      setTimeout( ()=>{
        jeans.activate();
        setTimeout(()=>{
          score8.activeS = true;
          fadedText.active = false;
        }, 3000);
      }, 200);

      setTimeout( ()=>{
        cow.activate();
        setTimeout(()=>{
          score1.activeS = true;
          fadedText.active = false;
        }, 3000);
      }, 7000);

      setTimeout(automaticAnimation, 3000);
    }

  }
  else if (state === `active` && button2.active === true && keyCode === 8){
    button2.active = false;
    if (stopCommands.length < 4){
      instructions2.active = false;
    }
    timerInstructions = 4;
    // setTimeout( ()=>{
    //   waltz.loop();
    // }, 4000);
  }
}

// function playMusic(){
//     if(interruption.active){
//       waltz.pause();
//       waltzInterruption.loop();
//     }
//     if(!interruption.active){
//       waltz.loop();
//       waltzInterruption.stop();
//       setTimeout( ()=>{
//         interruption.active = false;
//         console.log(interruption.active);
//       }, 4000);
//     }
// }


// function playMusic(){
//   if (waltzInterruption.isPlaying) {
//         waltz.pause();
//          sampleIsPlaying = false;
//         //
//         // sampleIsPlaying = false;
//         // text('Click to resume!', width / 2, height / 2);
//       } else {
//         //loop our sound element until we
//         //call ele.pause() on it.
//         waltz.loop();
//          waltzInterruption.isPlaying = true;
//
//         // sampleIsPlaying = true;
//         // text('Click to pause!', width / 2, height / 2);
//       }
// }

//
// function stopMusic(){
//     waltz.pause();
// }
