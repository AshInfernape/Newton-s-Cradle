
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//suspension=createSprite(290,200,600,200);
bobObject1=new Bob(300,350,50);
bobObject2=new Bob(350,350,50);
bobObject3=new Bob(400,350,50);
bobObject4=new Bob(450,350,50);
bobObject5=new Bob(500,350,50);
//bob6=new Bob(150,250,30);
 //fill ("brown");
  ground1 = new Ground(400,100,300,40);
  sling1= new Suspender(bobObject1.body,ground1.body,-50*2,0);
  sling2= new Suspender(bobObject2.body,ground1.body,-25*2,0);
  sling3= new Suspender(bobObject3.body,ground1.body,-0*2,0);
  sling4= new Suspender(bobObject4.body,ground1.body,25*2,0);
  sling5= new Suspender(bobObject5.body,ground1.body,50*2,0);
  //sling6= new Suspender(bob6.body,ground1.body,-40*2,0);
	Engine.run(engine);
  
}


function draw() {
  background(100);
//	ground.fill(48,22,8);
	//ground.stroke(0);
  rectMode(CENTER);
  Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  ground1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  //sling6.display();

  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === DOWN_ARROW) 
	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100}); } 
} 
