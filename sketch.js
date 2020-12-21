var paper;
var d1,d2,d3;
var ground;
var world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height - 240,800,10);
	paper = new Paper(100,height - 300,20);
	d1 = new Dustbin(width/2 + 200,height-250,200,20);
	d2 = new Dustbin(500,height-290,20,100);
	d3 = new Dustbin(700,height-290,20,100);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  
  d1.display();
  d2.display();
  d3.display();
  ground.display();
  paper.display();
 
  Engine.update(engine);
}

function keyPressed() {
	if (keyCode === UP_ARROW)  {
		Matter.Body.applyForce(paper.body,paper.body.position,{x : 45, y : -85});
	
	}   
}