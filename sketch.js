
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground1,tree1;
var stone1,boyImage,mango1;
var slingshot1;

function preload()
{
boyImage = loadImage("pictures/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new ground(400,650,1000,20);
tree1 = new tree(575,550,40,300);
boy1 = createSprite(200,595,70,100);
boy1.addImage("pictures/boy.png", boyImage);
boy1.scale = 0.1;
stone1 = new stone(230,600,20,20);
mango1 = new mango(600,400,20);
mango2 = new mango(575, 480,20,20);
mango3 = new mango(550,445,20,20);
mango4 = new mango(630,445,20,20);
slingshot1 = new slingShot(stone1.body,{x:260, y:600});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  tree1.display();
stone1.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
slingshot1.display();
detectCollision(stone1,mango1);
detectCollision(stone1,mango2);
detectCollision(stone1,mango3);
detectCollision(stone1,mango4);


  drawSprites();

 
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY})
}
function mouseReleased(){
  slingshot1.fly();
}
function detectCollision(lmango,lstone){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.r+lstone.width){
  Matter.Body.setStatic(lmango.body,false);
}
}



