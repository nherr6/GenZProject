let y = 0, x;
let y2,x2;
let w = window.innerWidth, h = window.innerHeight;
//let resize = 0.25;
let words =  []; 
var currentTime;
var startTime = 0;
var interval = 170;
var glitch = 1;
var font;
var mySound;

function preload(){
  font = loadFont("/Fonts/Krungthep.ttf");
  
  soundFormats('mp3', 'ogg');
  mySound = loadSound("/Assets/typing-iphone-sound.mp3");
}

function setup() {
  //createCanvas(w*resize, h*resize);
  createCanvas(w, h);
  words.push(new Word(random(-100, width), y - height*2)); //create new word and push to array
  colorMode(RGB, 255, 255, 255, 1);
  textFont(font);
  //noLoop(); //comment out to start loop
  //monoSynth = new p5.MonoSynth();
}

function draw() {
  currentTime = millis();
  background(8,8,173);
  makeWord();
  //genZ();

  //update and display the text scrolling down then delete
  for(let i=words.length - 2; i > 0; i--){
    words[i].update();
    words[i].display();
    if(words[i].offscreen() == true){
      //console.log("word deleted");
      words.splice(i,1);
    }
  }
}

function makeWord(){
  if (currentTime - startTime >= interval) {
    words.push(new Word(random(-10, width), random(y-500, height - 500))); //create new word at top / random x and push to array
    startTime = currentTime;
    //console.log("word added");
    interval = random(100,200);
    mySound.setVolume(random(0.1,0.3));
    mySound.play()
    // playSynth();
  }
}

function setY2(){
  y2 = random(height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//unused function
// function genZ(){
//   textSize(random(50, 200));
//   textAlign(CENTER);
//   textFont('roboto');
//   textStyle('italic');
//   fill(255,255,255);
//   if (glitch % 50 == 0) {
//     setY2()
//   } else {
//     x2 = random(width * 10);
//     y2 = random(0, height - 40);
//   };

//   text("gen-z", x2, y2);

//   glitch++;
// }

// function playSynth() {
//   userStartAudio();

//   let note = random(['C4', 'E4', 'G4', 'B5', 'D5']);
//   // note velocity (volume, from 0 to 1)
//   let velocity = random();
//   // time from now (in seconds)
//   let time = 0;
//   // note duration (in seconds)
//   let dur = 1 / interval;
  

//   //monoSynth.setADSR(.5, [.5], [1], [0])

//   monoSynth.play(note, velocity, time, dur);
// }