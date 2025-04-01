class Word{
    constructor(word,width,height,size){
        this.word = word;
        this.x = random(width);
        this.y = random(height);
        this.size = size/2;
        this.opacity = (random(80,220));
    }

    display(){
        textSize(this.size);
        fill(217,217,217,this.opacity);
        text(this.word, this.x, this.y);
    }
}