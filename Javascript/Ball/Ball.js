// Click and drag the mouse to view the scene from different angles.

let myGeometry;
let font;
let n = 0;
let letters=[];
let w = window.innerWidth;
let h = window.innerHeight;
let myAbvs;
let seed;
let yValInit;
let yVal;

function preload(){
  font = loadFont("Fonts/Roboto-Regular.ttf");
  myAbvs = loadStrings("Assets/abbreviations.txt");
}

function setup() {
  createCanvas(w, h, WEBGL);

  // Create a p5.Geometry object.
  beginGeometry();

  sphere(300, int(random(5,24)), int(random(5,24)));
  myGeometry = endGeometry();

  seed = int(random(50));

  for (let i = 0; i < (myGeometry.vertices).length; i++){
    letters[i] = new Letter(myGeometry.vertices[i].x, myGeometry.vertices[i].y, myGeometry.vertices[i].z, random(myAbvs), 17);
  }

  describe('A white torus rotates slowly against a dark gray background. Red spheres mark its vertices.');
}

function draw() {
  background(0);

  // Enable orbiting with the mouse.
  orbitControl();

  // Turn on the lights.
  lights();

  // Rotate the coordinate system.
  rotateY(frameCount * 0.002);

  // Style the p5.Geometry object.
  noFill();
  stroke(255, 255, 255, 15);

  // Display the p5.Geometry object.
  if(seed % 20 == 0){
    model(myGeometry);
  } 


  // Style the vertices.
  fill(255, 0, 0);
  noStroke();
  
  //draw words
  push();
  for (let p = 0; p < letters.length; p++) {
    letters[p].display();
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}