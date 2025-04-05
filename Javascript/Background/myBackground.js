var canvas;
var container;
let letters = []; 
var myBG;


function setup() {
    container = document.getElementById('body');

    canvas = createCanvas(window.innerWidth, container.offsetHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    letters.push(new Letter(mouseX, mouseY));
}

function draw() {
    background(20);
    fill("white");
    textSize(50);
    textAlign(CENTER);

    for (let i = 0; i < letters.length; i++) {
        letters[i].update();
        letters[i].display();
        if(letters[i].isGone()){
            letters.splice(i,1);
        }
    }
}

function mouseMoved(){
    letters.push(new Letter(mouseX, mouseY));
}

function windowResized() {
    resizeCanvas(windowWidth, container.offsetHeight);
}