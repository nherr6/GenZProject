class Letter {
  constructor(x, y, z, L, size) {
    this.L = L;

    this.x = x;
    this.y = y;
    this.z = z;

    this.size = size;

    this.values = [1, 255 / 2, 255];

    this.r = random(this.values);
    this.g = random(this.values);
    this.b = random(this.values);
  }

  display() {
    push();
    rotateY(frameCount/800);
    rotateX(-frameCount/400);
    translate(0, 0, this.z);
    textFont(font);
    textWrap(CHAR);
    fill(this.r, this.g, this.b);
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
