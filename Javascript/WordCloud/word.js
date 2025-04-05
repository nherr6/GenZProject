class Word{
  constructor(x,y, word){
    this.styles = [BOLD, ITALIC, NORMAL, BOLDITALIC];
    this.word = word;
    this.letters = split(word,"");
    this.style = random(this.styles);
    this.opacity = random(.75);
    
    this.x = x;
    this.y = y;
    
    this.size = (random(20,100));
    
    this.scroll = -5;
  }
  
  update(){
    this.y += this.scroll;
  }
  
  display(){
    push();
    translate(this.x,this.y);
    textFont(font);
    textStyle(this.style);
    textWrap(CHAR);
    fill(255,255,255, this.opacity);
    //noFill();
    //stroke(0, 255, 0, this.opacity);
    strokeWeight(3);
    textSize(this.size);
    for(let i=0; i<(this.letters).length; i++){
      text((this.letters[i]).toUpperCase(), 0, i*this.size);
    }

    pop();
  }
  
  offscreen(){
    if(this.y > height + 100){
      return true;
    }
    return false;
  }
}
