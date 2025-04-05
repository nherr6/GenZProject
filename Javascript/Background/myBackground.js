var canvas;
let letters = []; 
var myBG;
let isMobileDevice

function preload(){
    /* Storing user's device details in a variable*/
    let details = navigator.userAgent;

    /* Creating a regular expression 
    containing some mobile devices keywords 
    to search it in details string*/
    let regexp = /android|iphone|kindle|ipad/i;

    /* Using test() method to search regexp in details
    it returns boolean value*/
    isMobileDevice = regexp.test(details);
}

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    letters.push(new Letter(mouseX, mouseY));

    if (isMobileDevice) {
        text("Mobile " + windowWidth, width / 2, height / 2);
        myBG = 0;
    } else {
        text("Desktop " + windowWidth, width / 2, height / 2);
        myBG = 20;
    }
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
    resizeCanvas(windowWidth, windowHeight);
}