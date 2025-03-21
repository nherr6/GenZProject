class Type{
  constructor(sentence, r, dir, i){
    this.sentenceArray = sentence.split("");
    this.angle = 0;
    this.r = r;
    this.dir = dir;
    
    this.x = this.r * cos(this.angle);
    this.y = this.r * sin(this.angle);
    
    this.amt = 0;
    this.min = 0;
    this.angleInc = 90;
    this.speed = random(0.005,0.01);

    this.tx = random(width*0.1,width);
    this.ty = random(height*0.1,height);

    this.a = random(100,255);
    this.size = random(20,50);
  }
  
  update(){
    this.angle = this.min + easeInOutQuad(this.amt) * this.angleInc;
    
    if(this.amt > 1){
      this.amt = 0;
      this.min += this.angleInc;
    }else{this.amt+=this.speed;}
  }
  
  display(){
    textSize(this.size);
    noStroke();
    fill(255,255,255,this.a);
    
    push();
    translate(this.tx, this.ty);
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