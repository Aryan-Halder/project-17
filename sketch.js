var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bananaGroup
var survivalTime

function preload(){
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //createCanvas(600,200)
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  //ground.x=ground.width/2
  ground.velocityX=-4
  console.log(ground.x)
  
  bananaGroup = createGroup()
}


function draw() {
background("white")
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        //jumpSound.play();
    }
    monkey.velocityY = monkey.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  spawnFood()
  spawnObstacles()
   
  
    monkey.collide(ground)
    drawSprites()
}

function spawnFood() {
  if(frameCount % 80 === 0){
   var banana = createSprite(600,300,10,40);
   banana.velocityX = -6 
    banana.lifetime= 300
    banana.addImage(bananaImage)
    bananaGroup.add(banana)
    banana.scale= 0.1
}
} 

function spawnObstacles() {

if (frameCount % 300 === 0){
   var obstacle = createSprite(600,330,10,40);
   //obstacle.velocityX = -(6 + score/100);
   obstacle.velocityX= -6
  obstacle.scale = 0.1;
    obstacle.lifetime = 300;
  obstacle.addImage(obstacleImage)
  }
} 



