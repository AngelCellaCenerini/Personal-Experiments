class Drop {
  constructor(image){
    this.x = 375;
    this.y = -5;
    this.vx = 0;
    this.vy = 0;
    this.speed = 0.08;
    this.limit = 600;
    this.image = image;
    this.active = false;
    this.timing = 2000;
  }

  update(){
    setTimeout( ()=>{
      this.active = true;
    }, this.timing);

    this.move();
    this.reset();
    this.display();

    // setTimeout( ()=>{
    //   this.active = false;
    // }, 10000);
  }

  move(){
    if (this.active){
      this.x += this.vx;
      this.y += this.vy;

      this.vy += this.speed;
    }
  }

  reset(){
    if (this.active){
      if (this.y > this.limit){
        this.y = -2;
        this.vy = 0;
      }
    }
  }

  display(){
    if (this.active){
      image(this.image, this.x, this.y);
    }
  }
}
