
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var bottom;
var left,right;
var dustbin;


function setup() {
	createCanvas(1400, 700);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new PaperObject(200,200,70);
    ground = new Ground(700,700,1400,30);
    dustbin = new Dustbin(1100,550,50,50);
    bottom = new Dustbin(1100,675,290,20);
    left = new Dustbin(950,585,20,200);
    right = new Dustbin(1250,585,20,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255);
  drawSprites();
 
 // Engine.update(engine);
  paper.display();
  ground.display();
  dustbin.display();
  bottom.display();
  left.display();
 right.display();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:245,y:-300});
  }
}

