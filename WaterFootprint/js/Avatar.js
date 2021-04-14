class Avatar{
  constructor(image1, image2, image3, image4, imageA, imageB){
    this.x = 120;
    this.x2 = 630;
    this.y = 260;
    this.image1 = image1;
    this.image2 = image2;
    this.image3 = image3;
    this.image4 = image4;
    this.imageA = imageA;
    this.imageB = imageB;
    this.active1 = true;
    this.active2 = false;
    this.active3 = false;
    this.active4 = false;
  }

  thumbsUp(){
      this.active1 = false;
      this.active2 = true;
      this.thumbsDown();
  }

  thumbsDown(){
    setTimeout( ()=>{
     this.active1 = true;
     this.active2 = false;
   }, 5000);

  }

  fuckIt(){
    this.active1 = false;
    this.active4 = true;
  }

  display(){
    if(this.active1){
      image(this.image1, this.x, this.y);
      image(this.imageA, this.x2, this.y);
    }
    if(this.active2){
      image(this.image2, this.x, this.y);
      image(this.imageB, this.x2, this.y);
    }
    if(this.active3){
      image(this.image3, this.x, this.y);
      image(this.image3, this.x2, this.y);
    }
    if(this.active4){
      image(this.image4, this.x, this.y);
      image(this.image4, this.x2, this.y);
    }
  }
}
