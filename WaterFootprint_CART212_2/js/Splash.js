class Splash{
  constructor(image){
    this.x = 372;
    this.y = 512;
    this.active = false;
    this.image = image;
    this.duration = 0;
  }

  update(){
    this.display();
    this.reset();
  }

  display(){
    if (this.active){
      image(this.image, this.x, this.y, 230);
    }
  }


  reset(){
    if (this.active){
      setTimeout( ()=>{
        this.active = false;
      }, 900);
      }
    }
  }
