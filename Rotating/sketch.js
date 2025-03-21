let sentenceOg = "content consumes ";
let texts = []; let num = 8;
let rInc = 70;
let sentence = "";
let r;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);
  
  for(let i=0; i<num; i++){
    sentence = sentence.concat(sentenceOg);
    r = rInc * (i+1);
    if(i%2 == 0){
      dir = 1;
    }else{dir = -1;}
    
    texts[i] = new Type(sentence, r, dir, i);
  }
} 

function draw() {
  background(220);
  //translate(width/2, height/2);
  
  for(let i=0; i< num; i++){
      texts[i].update();
      texts[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}