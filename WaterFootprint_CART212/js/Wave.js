class Wave{
  constructor(image1, image2){
    this.x1 = 200;
    this.x2 = 560;
    this.y = 380;
    this.active = false;
    this.image1 = image1;
    this.image2 = image2;
  }

  update(){
    this.activate();
    this.display();
  }

  activate(){
      setTimeout( ()=>{
        this.active = true;
      }, 4000);
    }

  display(){
    if (this.active){
      image(this.image1, this.x1, this.y);
      image(this.image2, this.x2, this.y);
    }
  }

  }
