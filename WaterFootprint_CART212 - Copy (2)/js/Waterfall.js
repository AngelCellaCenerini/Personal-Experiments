class Waterfall {
  constructor(image){
    this.x = 375;
    this.y = -250;
    this.vx = 0;
    this.vy = 0;
    this.speed = 0.07;
    this.limit = 850;
    this.image = image;
    this.active = false;
  }

  update(){
    this.move();
    this.reset();
    this.display();
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
        this.y = -400;
        this.active = false;
        this.vy = 0;
      }
    }
  }

  display(){
    image(this.image, this.x, this.y);
  }
}
