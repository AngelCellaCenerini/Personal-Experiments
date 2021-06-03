"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

/**
Description of preload
// */
// function preload() {
//
// }
//
//
// /**
// Description of setup
// */
// function setup() {
//
// }
//
//
// /**
// Description of draw()
// */
// function draw() {
//
// }
trackKeyboardInput();

  // User Input affects page
  // let temp1 = document.getElementById(`t1`);
  // let temp2 = document.getElementById(`t2`);
  // let temp3 = document.getElementById(`t3`);
  // let temp4 = document.getElementById(`t4`);
  //
  // temp1.addEventListener(`keydown`, key1);
  //
  // function key1(){
  //   if (event.keyCode === )
  // }

  function trackKeyboardInput(){
  // Check Key pressed by User
  $(document).on(`keydown`, (function(event) {
    // User presses 'P'
    if ( event.which === 49){
      $(`#t1`).css(`opacity`, `100`);
      $(`#t2`).css(`opacity`, `0`);
      $(`#t3`).css(`opacity`, `0`);
      $(`#t4`).css(`opacity`, `0`);
    }
    else if (event.which === 50 ){
      $(`#t1`).css(`opacity`, `0`);
      $(`#t2`).css(`opacity`, `100`);
      $(`#t3`).css(`opacity`, `0`);
      $(`#t4`).css(`opacity`, `0`);
    }
    else if (event.which === 51 ){
      $(`#t1`).css(`opacity`, `0`);
      $(`#t2`).css(`opacity`, `0`);
      $(`#t3`).css(`opacity`, `100`);
      $(`#t4`).css(`opacity`, `0`);
    }
    else if (event.which === 52 ){
      $(`#t1`).css(`opacity`, `0`);
      $(`#t2`).css(`opacity`, `0`);
      $(`#t3`).css(`opacity`, `0`);
      $(`#t4`).css(`opacity`, `100`);
    }
  }))
  kjashdkashdkas
}
