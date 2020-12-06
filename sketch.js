const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bg;
var ground;
var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300 ;

function preload() {

bg = loadImage ("1.jpeg")

}



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
 ground = new Ground (width/2,795,480,10)
 for (var k =0 ; k <= width; k = k + 80) {
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
}

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();  
  for(var k=0;k<width;k + 80){
    divisions[k].display();
    }
  drawSprites();
}