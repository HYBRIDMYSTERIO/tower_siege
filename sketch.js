
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,ground2;

var block1,block2,block3,block4,block5,block6,block7,block8;

var block9,block10,block11,block12,block13,block14;

var stone;

var Score = 0;
var sling;
var backgroundIMG;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new Ground(350,300,250,15);
	ground2 = new Ground(700,170,250,15);
	
	block1 = new Mango(280,270);
	block2 = new Mango(330,270);
	block3 = new Mango(380,270);
	block4 = new Mango(430,270);
	block5 = new Mango(305,220);
	block6 = new Mango(355,220);
	block7 = new Mango(405,220);
	block8 = new Mango(355,170);

	block9 = new Mango(640,140);
	block10 = new Mango(690,140);
	block11 = new Mango(740,140);
	block12 = new Mango(690,90);
  
  stone = new Stone(100,300);
  sling = new Slingshot(stone.body, {x:100,y:280});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  

  if(backgroundIMG){
    background(backgroundIMG);

  }
  textSize(35);
  text("score:"+Score,850,50);
  block1.displaymango();
  block2.displaymango();
  block3.displaymango();
  block4.displaymango();
  block5.displaymango();
  block6.displaymango();
  block7.displaymango();
  block8.displaymango();

  block9.displaymango();
  block10.displaymango();
  block11.displaymango();
  block12.displaymango();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();

  block9.score();
  block10.score();
  block11.score();
  block12.score();
  
  stone.displaystone();
  sling.displaysling();
  
  ground1.display();
  ground2.display();
  drawSprites();
 setback();
}



function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x : mouseX , y : mouseY});

}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(stone.body)
  }
}

async function setback(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var data = await response.json();
  var dateTime = data.datetime;
  

  var hour = dateTime.slice(11,13);
  console.log(hour);

  var bg;

  if(hour >= 06 && hour <= 19){
    bg = "yellow";
  }
  else{
    bg = "black";
  }

  backgroundIMG = bg;

  
}