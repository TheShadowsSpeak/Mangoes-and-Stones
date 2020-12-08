
const Engine = matter.Engine;
const World = matter.World;
const Bodies = matter.Bodies;
const Body = matter.Body;
var Tree;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
    tree=new Tree(400,350,10,50);
    
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  drawSprites();
 
}



