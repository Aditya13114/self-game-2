var boy, boyImage;
var boyJumping, boyJumpingImage;

var coin, coinImage;
var mon1, mon1Image;
var mon2, mon2Image;

var obstacle1, obstacle1Image;
var obstacle2, obstacle2Image;
var obstacle3, obstacle3Image;
var obstacle4, obstacle4Image;

var scenery, sceneryImage;
var ground;

function preload(){
  sceneryImage = loadImage("sprites/background1.jpg");
  boyImage = loadAnimation("sprites/run1.png", "sprites/run2.png", "sprites/run3.png", "sprites/run4.png");
  boyJumpingImage = loadAnimation("sprites/boyJumping.png");
  coinImage = loadImage("sprites/coin1.png");
  mon1Image = loadImage("sprites/mon1.png");
  mon2Image = loadImage("sprites/mon2.png");
  obstacle1Image = loadImage("sprites/obs1.png");
  obstacle2Image = loadImage("sprites/obs2.png");
  obstacle3Image = loadImage("sprites/obs3.png");
  obstacle4Image = loadImage("sprites/obs4.png");
}



function setup(){
 createCanvas(windowWidth, windowHeight);

 scenery = createSprite(750,350);
 scenery.addImage(sceneryImage);
 scenery.scale = 1.6;

 boy = createSprite(100,514,20,20);
 boy.addAnimation("running", boyImage);
 boy.scale = 0.4;

 ground = createSprite(597,600,5000,50);
 ground.visible = false;

 boy.addAnimation("jumping", boyJumpingImage);

 


  
}

function draw(){
  background("white");

  if(keyDown("space") && boy.y >= 500) {
    boy.velocityY = -10.5;
    boy.changeAnimation("jumping", boyJumpingImage);
    

  }
  boy.changeAnimation("running", boyImage);
  boy.velocityY = boy.velocityY + 0.3;
  boy.collide(ground)

  text(mouseX+","+mouseY, mouseX,mouseY);

  spawnCoin();
  

  if(frameCount % 250 === 0) {
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: spawnLantern();
              break;
      
      case 2: spawnBox();
              break;
      
      case 3: spawnNeedle();
              break; 
              
      case 4: spawnBox2();
              break;

      case 5: spawnEnemy1();       
              break;

      case 6: spawnEnemy2();       
              break;
              

      default: break;
    }
  }
  drawSprites();
}



function spawnLantern(){
   
  obstacle1 = createSprite(1500,532);
  obstacle1.addImage(obstacle1Image);
  obstacle1.scale = 0.7;
  obstacle1.velocityX = -6;
  obstacle1.lifetime = 500;
}

function spawnBox(){
   
  obstacle2 = createSprite(1500,532);
  obstacle2.addImage(obstacle2Image);
  obstacle2.scale = 0.5;
  obstacle2.velocityX = -6;
  obstacle2.lifetime = 500;
}

function spawnNeedle(){
   
  obstacle3 = createSprite(1500,541);
  obstacle3.addImage(obstacle3Image);
  obstacle3.scale = 0.7;
  obstacle3.velocityX = -6;
  obstacle3.lifetime = 500;
}

function spawnBox2(){
   
  obstacle4 = createSprite(1500,532);
  obstacle4.addImage(obstacle4Image);
  obstacle4.scale = 0.5;
  obstacle4.velocityX = -6;
  obstacle4.lifetime = 500;
}

function spawnEnemy1(){
   
  monster1 = createSprite(1500,562);
  monster1.addImage(mon1Image);
  monster1.scale = 0.6;
  monster1.velocityX = -6;
  monster1.lifetime = 500;
}

function spawnEnemy2(){
   
  Enemy2 = createSprite(1500,562);
  Enemy2.addImage(mon2Image);
  Enemy2.scale = 0.7;
  Enemy2.velocityX = -6;
  Enemy2.lifetime = 500;
}

function spawnCoin(){
  if(frameCount % 450 === 0){
 coin = createSprite(1500,20,40,40);
 coin.y = Math.round(random(290,490));
 coin.addImage(coinImage);
 coin.scale = 0.2;
 coin.velocityX = -4;
 coin.lifetime =  500;
  }
}





  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  







