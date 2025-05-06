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
let note;
let velocity;

let monoSynth;

let stored = [];

function preload(){
  myAdjectives = loadStrings("Assets/adjectives.txt");
  myNouns = loadStrings("Assets/nouns.txt");
  font = loadFont("Fonts/Roboto-Regular.ttf");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  phrase = random(myAdjectives) + ' ' + random(myNouns) + " core.";
  monoSynth = new p5.MonoSynth();

  note = 'C5';
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
    //note = 'C5';
    velocity = 0.1;
    note = random(['C2', 'E2', 'G2', 'B2', 'C3', 'E3', 'G3', 'B3', 'D3']);
    playSynth();
    getNew();
  }
}

// function mousePressed() {
//   phrase = "";
//   phrase = random(myAdjectives) + ' ' + random(myNouns) + " core.";
//   startTime = currTime;
// }

function mousePressed(){
  velocity = 1;
  note = 'G5';
  playSynth();
}

function mouseReleased(){
  stored[num] = new Word(phrase, width, height, size);
  num++;
  note = 'C5';
  playSynth();
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

function playSynth() {
  userStartAudio();

  //let note = random(['Fb4', 'G4']);
  // note velocity (volume, from 0 to 1)
  //let velocity = random();
  // time from now (in seconds)
  let time = 0;
  // note duration (in seconds)
  let dur = 1 / 100;

  monoSynth.play(note, velocity, time, dur);
}