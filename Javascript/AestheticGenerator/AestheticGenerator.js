let font;
let myAdjectives;
let myNouns;
let phrase;
let r;
let currTime;
let startTime = 0;
let interval = 45;

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
  background(220);
  // Style the text.
  textAlign(CENTER);
  textFont(font);

  textSize(((width) / phrase.length) * 1.7);

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