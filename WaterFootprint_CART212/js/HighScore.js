class HighScore{
  constructor(string1, string2){
    this.x = 375;
    this.y1 = 45;
    this.y2 = 115;
    this.y3 = 145;
    this.string1 = string1;
    this.string2 = string2;
    this.activeH = false;
    this.activeS = false;
  }

  displayHighScore(){
    if (this.activeH){
      push();
      let r = random(0, 255);
      fill(251, 167, 14, r);
      textSize(60);
      text(`HIGH SCORE`, this.x, this.y1);
      pop();
    }
  }

  displayScore(){
    if (this.activeS){
      push();
      fill(255);
      textSize(26);
      text(this.string1, this.x, this.y2);
      text(this.string2, this.x, this.y3);
      pop();
    }
  }

  deactivate(){
    if (this.activeH || this.activeS){
        this.activeH = false;
        this.activeS = false;
    }
  }
}
