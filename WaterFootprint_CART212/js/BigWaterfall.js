class BigWaterfall{
  constructor(image){
    this.x1 = 150;
    this.x2 = 600;
    this.y = -600;
    this.vx = 0;
    this.vy = 0;
    this.speed = 2;
    this.limit = 315;
    this.active = false;
    this.image = image;
  }

  update(){
    this.activate();
    this.move();
    this.display();
  }

  activate(){
      setTimeout( ()=>{
        this.active = true;
      }, 2000);
    }

    move(){
      if (this.active){
        this.x += this.vx;
        this.y += this.vy;

        this.vy += this.speed;

        if(this.y > this.limit){
          this.vy = 0;
          this.speed = 0;
        }
      }
    }

  display(){
    if (this.active){
      image(this.image, this.x1, this.y);
      image(this.image, this.x2, this.y);
    }
  }

  }
