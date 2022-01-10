const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var birdimg,lightningUpImg,lightningDownImg;
var bird
var lightningUp=[]
var lightningDown=[]


var bg_img,bg;
var background;
var score=0;
var storm;




function preload()
{
  bg_img = loadImage('storm.png');
  
  birdimg = loadAnimation('b1 (1).png','b1 (2).png','b1 (3).png','b1 (4).png','b1 (5).png','b1 (6).png');
  lightningUpImg = loadImage('LightningUp.png');
  lightningDownImg = loadImage('LightningDown.png');
  


  birdimg.playing=true
}

function setup() 
{
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
 
   
  bg=createSprite(200,200,800,400);
  bg.addImage(bg_img)
 

  
 
  
  bird =createSprite(100,180,100,100);
  bird.addAnimation('blueBird',birdimg); 
  bird.scale=0.2
  

  

  
  
}

function draw() 
{
  background(51);

  
  
  if (bg.position.x<100){
    bg.position.x=700
  }
  
  fill("yellow");
  textSize(25);
  text(`Score:${score}`, width - 100, 50);
  textAlign(CENTER, CENTER);
  
  
  bg.velocityX=-3
  
  
  
  if(frameCount % 250 == 0){ 
  LightningDown=createSprite(800,350,20,20);
  LightningDown.addImage(lightningDownImg);
  LightningDown.scale=Math.random(0.11,0.12)
  LightningDown.velocityX=-1
  }


 

  if(frameCount % 200 == 0){
    LightningUp=createSprite(800,50,20,20);
    LightningUp.addImage(lightningUpImg)
    LightningUp.scale=Math.random(0.11,0.12)
    LightningUp.velocityX=-1
  }

   //code for gap between lightning,y>=something  then it goes back
  //if (lightningDown.position.y<=250){
    //lightningDown.position.y=200
   // }
  
  
  


  Engine.update(engine);
  
  

  if (keyIsDown(UP_ARROW) ) {
    bird.position.y-=2
  }

  if (keyIsDown(DOWN_ARROW) ) {
    bird.position.y +=2;
  }

 drawSprites();
   
}

//function collisionWithUp() {
 
      //var collision = Matter.SAT.collides(bird.body, lightningUp.body);

     // if (collision.collided) {
       // score+=5
          
        

       // Matter.World.remove(world, bird.body);
        //gameOver();
      //}
   // }

   // function gameOver() {
     // swal(
       // {
         // title: `Game Over!!!`,
         // text: "Thanks for playing!!",
          
         // confirmButtonText: "Play Again"
        //},
        //function(isConfirm) {
        //  if (isConfirm) {
        //    location.reload();
        //  }
        //}
      //);
    //}