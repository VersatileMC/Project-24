
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, groundSprite;
var redBox,redBoxleft,redBoxRight;
var paperBall;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options1 ={
		isStatic:true,
   }
    
   groundSprite = createSprite(400,690,800,10);
   groundSprite.shapeColor = "white";

    ground = Bodies.rectangle(400,680,800,10,options1);
	World.add(world,ground);

	redBox = new Dustbin(640, 675, 200, 20);

	redBoxleft = new Dustbin(530, 635, 20, 100);

	redBoxRight = new Dustbin(750, 635, 20, 100);

	paperBall = new Paper(50,600,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  drawSprites();
 
  redBox.display();

  redBoxleft.display();

  redBoxRight.display();

  paperBall.display();

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperBall.body.position,{x:85,y:-85});

	}


}



