
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var d1,d2,d3,d4;
var gr;
var crumble, Ds;

function preload()
{
  hello  = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    d1 = new Dustbin(580,655,120,10);
    d2 = new Dustbin(530,620,10,55);
    d3 = new Dustbin(630,620,10,55);

    Ds = new DS(600,635,5,5);

    d4 = new Dustbin(380,670,800,10);
    gr = new ground(400,680,800,10);
    crumble = new Paper(100,640,30);
// This is where I added the dustbin image using a sprite
    anim = createSprite(580,600,2,2);
    anim.addImage(hello);
    anim.scale = 0.5;

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  gr.display();
  d1.display();
  d2.display();
  d3.display();
  Ds.display();
//   d4.display();
  
  crumble.display();


  drawSprites();
 
}

function keyPressed(){
    if (keyCode === UP_ARROW) {
// i have changed the x: and Y: values over here so that the paper falls into dustbin
        Matter.Body.applyForce(crumble.body,crumble.body.position,{x:130,y:-130})

    }
}


