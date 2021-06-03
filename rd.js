class Rd{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
            }
        //  shape of the body
        this.body = ellipse(x,y,10);
        this.x = x;
        this.y = y;
        this.image=loadImage("i/rd.png")
        
    }
    //make fall function to add speed 
    fall(speed){
        this.y +=speed;
    }
  // display function to guve the x,y,radius and color
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.x, this.y, 31/2,42/2);
        pop();
    }}