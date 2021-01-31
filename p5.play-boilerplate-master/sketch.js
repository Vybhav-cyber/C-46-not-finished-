const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var player;
var ground, snowman, snowball;
var backgroundIMG;


function preload(){
  backgroundIMG = loadImage("images/BackGround.jpg");
}


function setup() {  
  createCanvas(700,400);
  engine = Engine.create();
  world = engine.world;
  
  player = new Player(100,20);
  
  
  ground = new Ground(400,400,1000,10);
  
  snowball = new Snowball(475,350);

  snowman = new Snowman(500,350,50,50);
  
  snowball2 = new Snowball(475,300);
 
  }

function draw() {
  background(backgroundIMG);
  Engine.update(engine);
  
  ground.display();

  player.display();

  snowman.display();
  snowball.display();
  snowball2.display();
  //SnowballVelocity();
  drawSprites();

  
}

function keyPressed(){
  
  //Up
  if(keyCode === UP_ARROW){
    console.log("Up Arrow Pressed");
    player.playerUp();    
    }
  //Down
  if (keyCode === DOWN_ARROW ) {
		console.log("Down Arrow Pressed");
    player.playerDown();
  }
    //Left
    if(keyCode === LEFT_ARROW){
      console.log("Left Arrow Pressed");
    player.playerLeft();
   }
    
   //Right
   if(keyCode === RIGHT_ARROW){
    console.log("Right Arrow Pressed");
    player.playerRight();
 }
// if(keyCode === 32){ 
  // Matter.Body.applyForce(snowball.body, snowball.body.position, {x: 310, y: -180});
  //snowball.Force();
  //console.log("In function SnowballVelocity");
   //}
  
}


function SnowballVelocity() {
 //if(keyCode === 32){ 
 // Matter.Body.applyForce(snowball.body, snowball.body.position, {x: 310, y: -180});
 //snowball.Force();
 //console.log("In function SnowballVelocity");
 // }
  
}
  
