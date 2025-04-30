/*
----- Coding Tutorial by Patt Vira ----- 
Name: ASCII Art (with Video Webcam)
Video Tutorial: https://youtu.be/4IyeLc6J1Uo

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

let asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,^`'. "
//let asciiChar = " .:-=+*#%@Z";

let video; let vidw = 64; let vidh = 48; let scl = 12;
let w, h;
let r, g, b;
let i;

function setup() {
    createCanvas(windowWidth, windowHeight);
    capture = createCapture(VIDEO);
    capture.hide();

    video = createCapture(VIDEO);
    video.size(windowWidth/8, windowWidth/8);
    w = width / video.width;
    h = height / video.height;

    r = 100;
    g = 255;
    b = 50;
    
    i = -1;
    j = -1;
    k = -1;
}

function draw() {
    background(r,g,b);

    textSize(30);
    fill(255);
    text("generation z", width/2, height/2);

    video.loadPixels();

    /* ---- Using pixels ---- */
    for (let i = 0; i < video.width; i++) {
        for (let j = 0; j < video.height; j++) {
            let pixelIndex = (i + j * video.width) * 4;
            let r = video.pixels[pixelIndex + 0];
            let g = video.pixels[pixelIndex + 1];
            let b = video.pixels[pixelIndex + 2];

            // let bright = brightness(color(r, g, b))
            let bright = (r * 4 + g + b) / 3;
            let tIndex = floor(map(bright, 0, 255, 0, asciiChar.length));

            let x = i * w + w / 2;
            let y = j * h + h / 2;
            let t = asciiChar.charAt(tIndex);
            //stroke(255);
            fill(255);

            textSize(w);
            textAlign(CENTER, CENTER);
            text(t, x, y);
        }
    }
    if(r == 0){i = 1};
    if(r == 255){i = -1};

    if (g == 0) { j = 1 };
    if (g == 255) { j = -1 };

    if (b == 0) { k = 1 };
    if (b == 255) { k = -1 };

    g += i;
    r += j;
    b += k;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}