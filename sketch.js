const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world, Ground,box1,box2;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Ground=new ground(400,390,800,20);
  box1 = new Box(130,10,30,50);
 
  box2 = new Box(100,50,50,50);

 
}

function draw() {
  background("pink");  
  Engine.update(engine);
  box1.display();
  box2.display();
  Ground.display();
}