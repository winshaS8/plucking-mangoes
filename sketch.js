
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Stone,StoneImage,boy1,boyImage,ground1,tree1,thread;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango8,mango9,mango10;

function preload()
{
     boyImage = loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
	
	Engine.run(engine);
	
	 ground1 = new ground(400,670,800,5);
	 tree1 = new tree(540,440,500,500);
	 Stone = new stone(65,500,60,60);
	 mango1 = new mango(500,400,30,30);
	 mango2 = new mango(600,380,30,30);
	 mango3 = new mango(500,250,30,30);
	 mango4 = new mango(750,350,30,30);
	 mango5 = new mango(600,300,30,30);
	 mango6 = new mango(700,400,30,30);
	 mango7 = new mango(650,340,30,30);
	 mango8 = new mango(400,350,30,30);
	 mango9 = new mango(500,330,30,30);
	 mango10 = new mango(610,230,30,30);
     thread = new constrain(Stone.body,{x:65,y:500})
   
}


function draw() 
{
  rectMode(CENTER);
  background(0);
 
  
  ground1.display();
  image(boyImage,10,440,300,300);
  Stone.display();
  tree1.display(); 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  thread.display();
}

function mouseDragged()
	{
      Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY });
	}
function mouseReleased()
{
     thread.fly();
}

