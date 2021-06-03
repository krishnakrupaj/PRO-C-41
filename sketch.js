// Add matter.js first,give the physics engines
const Engine = Matter.Engine,World = Matter.World,Events = Matter.Events,Bodies = Matter.Bodies;  
//creating variables for
//images
var manwalk,th//,th1,th2,th3,th4
//arrays
var rd1 = [],rd2 = []
//objects
var umb,thunder,man,manny

function preload(){
    //loading walking man's animation
    manwalk=loadAnimation("i/walking_8.png","i/walking_7.png","i/walking_6.png","i/walking_5.png","i/walking_4.png",
    "i/walking_3.png","i/walking_2.png","i/walking_1.png")
    //loading thunder animation
    th = loadAnimation("i/1.png","i/2.png","i/3.png","i/4.png")
}

function setup(){
    //create canvas
createCanvas(400,650)
//create engine,world
engine = Engine.create();
world = engine.world;
//create thhunder and set animation
thunder = createSprite(width/2,50)
thunder.addAnimation("idi",th)
thunder.scale = 0.7 
//creating man with umbrella
man = new Umbi(200,550);
//create sprite in man's position
manny = createSprite(200,550)
//set scale and animation
manny.addAnimation("nada",manwalk)
manny.scale = 0.3

}

function draw(){
    background(0)
    // run andupdate Engine
    Engine.run(engine)
    Engine.update(engine);
    //create raindrops
    if(frameCount % 1 === 0){
        var rd_1 = new Rd(random(5,395),-100);
        var rd_2 = new Rd(random(5,395),-100);
        rd1.push(rd_1);
        rd2.push(rd_2);
      } 

      // display raindrops
      for(var i = 0; i < rd1.length; i++){
        rd1[i].fall(15);
        rd1[i].display();
      } 
      for(var i = 0; i < rd2.length; i++){
        rd2[i].fall(15);
        rd2[i].display();
      } 

    man.display()

    drawSprites()
}   

