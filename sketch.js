
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//declare it here
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	//rectMode(CENTER);  no need of this here
	
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    box1 = createSprite(520,580,20,200)
	box1.shapeColor = color(250, 5, 5)

	box2 = createSprite(270,580,20,200)
	box2.shapeColor = color(250,5,5)

	box3 = createSprite(400,670,250,20)
	box3.shapeColor = color(250,5,5)
//give a smlal restitution value
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);

	//box3 = Bodies.rectangle(520,585,20,150,{isStatic:true});
	//World.add(world,box3);
	//Engine.run(engine);
}


function draw() {
  //make background command as the first line of function draw()
  background(0);
  console.log(mouseX,mouseY)
  rectMode(CENTER);
  Engine.update(engine)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  keyPressed();
  drawSprites();
}

//you cannot make a function inside another function
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		//over here we want to make the packageBody fall not the sprite
	 // Matter.Body.setStatic(packageSprite,false);
	
	 Matter.Body.setStatic(packageBody,false);
	}
}
