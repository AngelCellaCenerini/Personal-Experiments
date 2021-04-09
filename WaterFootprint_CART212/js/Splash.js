class Splash{
  constructor(image){
    this.x = 372;
    this.y = 538;
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
  //
  // activate(){
  //   setTimeout( ()=>{
  //     this.active = true;
  //   }, 2050);
  // }

  reset(){
    if (this.active){
      setTimeout( ()=>{
        this.active = false;
      }, 780);
      }
    }
  }
  //
  // startTiming(){
  //   if (this.active){
  //     this.duration++;
  //   }
  //   if (this.duration > 2*60){
  //      this.active = false;
  //   }
  // }
  //
  // resetTimer(){
  //   if (this.duration > 2*60){
  //      this.active = false;
  //   }
  // }
// }
