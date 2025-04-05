class Letter {
    constructor(x, y) {
        this.letter = 'z';
        this.styles = [BOLD, ITALIC, NORMAL, BOLDITALIC];

        this.x = x;
        this.y = y;

        this.size = (random(20, 120));

        this.speed = 5;

        this.opacity = 100;
    }

    update() {
        //this.y += this.speed;
        //this.x += this.speed;
        this.opacity -= 1;
    }

    display() {
        push();
        //translate(this.x, this.y);
        textAlign(CENTER);
        textWrap(CHAR);
        fill(255, 255, 255, this.opacity);
        textSize(this.size);
        text((this.letter), this.x-this.size/2, this.y - this.size/2, this.size);
        pop();
    }

    isGone() {
        if (this.opacity < 1){
            return true;
        }
        else {return false;}
    }
}
