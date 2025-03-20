class Type{
  constructor(sentence, r, dir){
    this.sentenceArray = sentence.split("");
    this.angle = 0;
    this.r = r;
    this.dir = dir;
    
    this.x = this.r * cos(this.angle);
    this.y = this.r * sin(this.angle);
    
    this.amt = 0;
    this.min = 0;
    this.angleInc = 90;
    this.speed = 0.005
    
  }
  
  update(){
    this.angle = this.min + easeInOutQuad(this.amt) * this.angleInc;
    
    if(this.amt > 1){
      this.amt = 0;
      this.min += this.angleInc;
    }else{this.amt+=this.speed;}
  }
  
  display(){
    textSize(30);
    noStroke();
    fill(255);
    
    push();
    rotate(this.dir * this.angle);
    for(let i = 0; i < this.sentenceArray.length; i++){
      push();
      let startingAngle = 360 / this.sentenceArray.length * i;
      rotate(startingAngle);
      text(this.sentenceArray[i], this.x, this.y);
      pop();
    }
    pop();
  }
}