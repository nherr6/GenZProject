let w = 400, h = 400;
let resize = 1;
let points = [];
let font;

function preload(){
  font = loadFont('/Fonts/Roboto-Regular.ttf');
}

function setup() {
  createCanvas(400, 400);
  points = font.textToPoints("Z", 100, 300, 300);
  console.log(points);
}

function draw() {
  background(220);
  for (let i=0; i<points.length; i++){
    ellipse(points[i].x, points[i].y, 10, 10);
  }

  let box = font.textBounds("A", 0, 300, 300);
}