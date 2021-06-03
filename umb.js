class Umbi{
    constructor(x,y){
var options ={
    // giveisStaic true 
    isStatic : true
}    
    this.body = Bodies.rectangle(x,y,1,1,options);
    World.add(world,this.body)
}
display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill("black");
    rect(0,0,347*0.3,651*0.3) ;
    pop();
  }
}