class Product{
  constructor(image){
    this.x = 375;
    this.y = 390;
    this.image = image;
    this.active = false;
  }

  activate(){
    setTimeout(()=>{
      this.active = true;
    }, 2500);
  }

  display(){
    if (this.active){
      image(this.image, this.x, this.y);
    }
  }

  deactivate(){
    if(this.active){
    setTimeout( ()=>{
        this.active = false;
    }, 4000);
  }
}
}
