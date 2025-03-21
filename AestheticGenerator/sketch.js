let font;
let myAdjectives;
let myNouns;
let phrase;
let r;
let currTime;
let startTime = 0;
let interval = 5000;

function preload(){
  myAdjectives = loadStrings('assets/adjectives.txt');
  myNouns = loadStrings('assets/nouns.txt');
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
  textFont('roboto');

  textSize(((width) / phrase.length) * 1.7);

  // Display the text.
  text(phrase, width / 2, height / 2);
}

function mouseClicked(){
  console.log("mouse clicked");
  phrase = "";
  phrase = random(myAdjectives) + ' ' + random(myNouns) + " core.";
}

function windowResized(){
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function wait(){
  if(currTime - startTime >= interval){
    startTime = currTime;
  }
}
