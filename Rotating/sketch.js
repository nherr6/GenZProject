let sentenceOg = "generationZ";
let texts = []; let num = 5;
let rInc = 50;
let sentence = "";

function setup() {
  createCanvas(1080*0.25, 1920*0.25);
  angleMode(DEGREES);
  
  for(let i=0; i<num; i++){
    sentence = sentence.concat(sentenceOg);
    r = rInc * (i+1);
    if(i%2 == 0){
      dir = 1;
    }else{dir = -1;}
    
    texts[i] = new Type(sentence, r, dir);
  }
} 

function draw() {
  background(220);
  translate(width/2, height/2);
  
  for(let i=0; i< num; i++){
      texts[i].update();
      texts[i].display();
  }
}