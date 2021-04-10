class Message{
  constructor(){
    this.x = 375;
    this.y = -100;
    this.string = `The world is fucked up`;
    this.vx = 0;
    this.vy = 0;
    this.speed = 7;
    this.active = true;
  }

  update(){
    // this.activate();
    // this.deactivate();
    this.stop();
    // this.reset();
    this.move();
    this.display();
    // this.reset();
  }

  // activate(){
  //   // setTimeout( ()=>{
  //     this.active = true;
  //   // }, 3000);
  // }

  // deactivate(){
  //   setTimeout( ()=>{
  //     this.active = false;
  //     this.y = -100;
  //     this.speed = 3;
  //   }, 3000);
  // }

  stop(){
    if(this.y > 32){
      this.vy = 0;
      this.speed = 0;
      this.reset();
    }
  }

  reset(){
    setTimeout( ()=>{
      this.y = -100;
      this.speed = 7;
  }, 3000);
}

  move(){
    if (this.active){
      this.x += this.vx;
      this.y += this.vy;

      this.vy = this.speed;


      // if(this.y > 2){
      //   this.vy = 0;
      //   this.speed = 0;
      // }
      // else{
      //     this.vy = this.speed;
      // }
    }
  }

  display(){
    if (this.active){
      push();
      fill(139, 217, 199, 200);
      rect(this.x, this.y, 250, 60);
      fill(255);
      textSize(18);
      text(this.string, this.x, this.y);
      pop();
    }
  }
}
