let font;
let myAdjectives;
let myNouns;
let phrase;
let r;
let currTime;
let startTime = 0;
let interval = 45;
let num = 0;
let size;

let stored = [];

function preload(){
  myAdjectives = loadStrings("Assets/adjectives.txt");
  myNouns = loadStrings("Assets/nouns.txt");
  font = loadFont("Fonts/Roboto-Regular.ttf");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  phrase = random(myAdjectives) + ' ' + random(myNouns) + " core.";
}

function draw() {
  currTime = millis();
  background("white");
  textAlign(CENTER);

  for (let i = 0; i < stored.length; i++) {
    stored[i].display();
  }

  // Style the text.
  textFont(font);
  fill("black");

  size = ((width) / phrase.length) * 1.7;
  textSize(size);

  // Display the text.
  text(phrase, width / 2, height / 2);

  if(!mouseIsPressed){
    getNew();
  }
}

// function mousePressed() {
//   phrase = "";
//   phrase = random(myAdjectives) + ' ' + random(myNouns) + " core.";
//   startTime = currTime;
// }

function mouseReleased(){
  stored[num] = new Word(phrase, width, height, size);
  num++;
}

function displayStored(){
  
}

function windowResized(){
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function getNew(){
  if(currTime - startTime > interval){
    phrase = "";
    phrase = random(myAdjectives) + ' ' + random(myNouns) + " core.";
    startTime = currTime;
  }
}