
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var ground, paper, db1, db2, db3, di, dustbinImage;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	di=loadImage("dustbingreen.png")
	dustbinImage=createSprite(1300,550,50,50)
	dustbinImage.addImage(di);
	dustbinImage.scale=0.8;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(800,690,1600,20);
	paper = new Paper(50,675,70);
	db1 = new dustbin(1300,670,200,20);
	
	db2 = new dustbin(1190,630,20,100);
	db3 = new dustbin(1410,630,20, 100);
	Engine.run(engine);
	
  
}


function draw() {
  
  background("white");
  Engine.update(engine)
  rectMode(CENTER);


  ground.display();
  paper.display();
  db1.display();
  db3.display();
  db2.display();
  drawSprites();
 //keypressed();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:310,y:-325});
		
	}


}



