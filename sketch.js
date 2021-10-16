
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var play = 0 ;
var vsState = 1;


var gameState = 0;
var player , playerimg;
var  monster, monsterImg1, monsterImg2 ;
var vs , vsImg;
var Ground , GroundImg;

 





function preload()
{

	monsterImg1 = loadImage("monster.png");
	monsterImg2 = loadImage("monsterchange.png");
	vsImg = loadImage("vs.jpg");


	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  
 
  if(gameState === play){

	

	monster = createSprite(windowWidth/2+300 , windowHeight/2);
	monster.addImage(monsterImg1);
	monster.scale = 0.3;
	background(vsImg);

	if(touches.length < 0 ||mousePressedOver(monster)){
       
		gameState = vsState;

	}


  }

   
  if(gameState === 1){

	textSize(40);
	fill("red");
	text("you are playing" ,windowWidth/2,windowHeight/2);

   }






  drawSprites();

  

 
}



