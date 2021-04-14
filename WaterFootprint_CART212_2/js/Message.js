class Message{
  constructor(){
    this.x = 375;
    this.y = -80;
    this.string = `Only 3% of the world’s water is fresh water,
    2/3 of which tucked away in frozen glaciers.`;
    this.vx = 0;
    this.vy = 0;
    this.speed = 7;
    this.active = false;
    this.switch = 2000;
    this.duration = 0;
    this.duration2 = 4;
  }

  update(){
    this.activate();
    // this.stop();
    this.move();
    this.display();
    this.reset();
  }

  activate(){
    setTimeout( ()=>{
      this.active = true;
    }, this.switch);
  }


  // stop(){
  //   if (this.active){
  //     if(this.y > 35){
  //       this.vy = 0;
  //       this.speed = 0;
  //       // setTimeout( ()=>{
  //         this.reset();
  //         // this.active = false;
  //         // displayedAlerts.push(displayedAlert);
  //       // }, 3000);
  //     }
  //   }
  // }

  reset(){
    if (this.active){
    //   setTimeout( ()=>{
    //     this.active = false;
    // }, this.switch2);
    // if(this.duration > 2*60){
    //   this.active = false;
    // }
    }
}

  move(){
    if (this.active){
      this.x += this.vx;
      this.y += this.vy;

      this.vy = this.speed;

      if(this.y > 40){
        this.vy = 0;
        this.speed = 0;
        this.duration++;
        if(this.duration > this.duration2*60){
          this.active = false;
        }
      }
    }
  }

  display(){
    if (this.active){
      push();
      fill(139, 217, 199, 160);
      rect(this.x, this.y, 500, 70);
      fill(255);
      textSize(16);
      textStyle(BOLD);
      textFont(`Courier`);
      text(this.string, this.x, this.y);
      pop();
    }
  }
}
