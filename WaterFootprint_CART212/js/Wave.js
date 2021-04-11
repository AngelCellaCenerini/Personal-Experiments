class Wave{
  constructor(image){
    this.x1 = 372;
    this.x2 = 372;
    this.x3 = 372;
    this.x4 = 372;
    this.y = 508;
    this.y2 = 508;
    this.active = false;
    this.image1 = image;
    this.image2 = image;
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
      }, 790);
      }
    }
  }
