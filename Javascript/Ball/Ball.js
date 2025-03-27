// Click and drag the mouse to view the scene from different angles.

let myGeometry;
let font;
let n = 0;
let letters=[];
let message = ["z", "$", "z", "z", "z", "z"];
//let message = "generationz";
let w = window.innerWidth;
let h = window.innerHeight;
let myAbvs;

function preload(){
  font = loadFont("Fonts/Roboto-Regular.ttf");
  myAbvs = loadStrings("Assets/abbreviations.txt");
}

function setup() {
  createCanvas(w, h, WEBGL);

  // Create a p5.Geometry object.
  beginGeometry();
  //torus(30, 15, 10, 8);
  sphere(300);
  myGeometry = endGeometry();

  //let myMessage = message.split("");

  for (let i = 0; i < (myGeometry.vertices).length; i++){
    // for(let j = 0; j < letters.length; j++){
    //   //console.log(letters[j].getX());
    //   if (int(myGeometry.vertices.x) == letters[j].getX() &&int(myGeometry.vertices.y) == letters[j].getY() && int(myGeometry.vertices.z) == letters[j].getZ()){
    //     console.log(letters[j]);
    //     letters.splice(j);
    //   }
    // }
    letters[i] = new Letter(myGeometry.vertices[i].x, myGeometry.vertices[i].y, myGeometry.vertices[i].z, random(myAbvs), 20);
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
  //fill(255,0,0);
  noFill();
  stroke(0,0,255);
  
  //style text
  // textFont(font);
  // textAlign(CENTER);
  // textSize(30);

  // Display the p5.Geometry object.
  //model(myGeometry);

  // Style the vertices.
  fill(255, 0, 0);
  noStroke();
  
  push();
  for (let p = 0; p < letters.length; p++) {
    //letters[p].update();
    letters[p].display();
  }
  // Iterate over the vertices array.
  // for (let v of myGeometry.vertices) {
  //   // Draw a sphere to mark the vertex.
  //   push();

  //   //rotateZ(n);
  //   // translate(0,0,v.z);
  //   // text("z",v.x, v.y);
  //   //sphere(2.5);

    

  //   pop();
  // }
  pop();
  
  //n+=.02;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}