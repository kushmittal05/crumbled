
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var trash
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);	

	engine = Engine.create();
	world = engine.world;

	paper= new Paper(100,200,20);
	ground = new Ground(750,580,1500,20)
	trash= new Trash(700,550);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  trash.display();


  paper.y=paper.y+1;

  

  keyPressed();


  drawSprites();
 
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-5});
    }
}


