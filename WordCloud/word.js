class Word{
  constructor(x,y){
    this.words = ["Techy", "Ambitious", "Anxious","Passionate", "Apprehensive", "Pioneering", "Selfish", "Wired", "Based", "Epic", "Overdone", "Exposed", "Rot", "Delusional", "Impulsive", "Chopped", "Magical", "Awful"];
    this.styles = [BOLD, ITALIC, NORMAL, BOLDITALIC];
    this.word = random(this.words);
    this.style = random(this.styles);
    this.opacity = random(1);
    
    this.x = x;
    this.y = y;
    
    this.size = (random(70,150));
    
    this.scroll = 15;
  }
  
  update(){
    this.y += this.scroll;
  }
  
  display(){
    push();
    translate(this.x,this.y);
    textFont('Courier New');
    textStyle(this.style);
    textWrap(CHAR);
    fill(255,255,255, this.opacity);
    //noFill();
    //stroke(0, 255, 0, this.opacity);
    strokeWeight(3);
    textSize(this.size);
    text((this.word).toUpperCase(),0,0,this.size);
    pop();
  }
  
  offscreen(){
    if(this.y > height + 100){
      return true;
    }
    return false;
  }
}
