class Letter {
  constructor(x, y, z, L, size) {
    this.L = L;

    this.x = x;
    this.y = y;
    this.z = z;

    this.size = size;

    //this.scroll = 15;
  }

  update() {
    push();
    rotate();
    //this.n++;
    //console.log(this.n);
    pop();
  }

  display() {
    push();
    rotateY(frameCount/800);
    rotateX(-frameCount/400);
    translate(0, 0, this.z);
    textFont(font);
    //textStyle(this.style);
    textWrap(CHAR);
    fill(255, 0, 0);
    //strokeWeight(3);
    textSize(this.size);
    text(this.L, this.x, this.y);
    pop();
  }

  getX(){
    return int(this.x);
  }

  getY() {
    return int(this.y);
  }

  getZ() {
    return int(this.z);
  }
}
