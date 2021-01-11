const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup() {
	createCanvas(1200, 700);
engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
paper = new Paper(100,340,10);
dustbin = new Dustbin(720,390,100,10);
ground = Bodies.rectangle(width / 2,400, width,10, {isStatic:true});
	
	
	
}

  


function draw() {
  rectMode(CENTER);
  background(0);
  

  paper.display();
  dustbin.display();
 ground.display();
}

function keypressed() {
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
		
	
	 

}
}












