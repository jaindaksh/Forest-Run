var character,CharacterImage;
var Monster,MonsterImage;
var Forest,ForestImage;
var ground,groundImage;
var coins,coinImage,coinsImage2,coinImage3,coinImage4 , coinGroup;
var obstacles,obstacleImage,obstacleImage2,obstacleImage3,obstacleImage4,obstacleGroup;
var gameState = "Start"
var nextButton,NextButtonImage,RestartButton, RestartButtonImage;

function preload() 
{
  CharacterImage = loadAnimation("Sprite_11.png","Sprite_12.png","Sprite_13.png","Sprite_14.png","Sprite_15.png","Sprite_16.png","Sprite_17.png","Sprite_18.png","Sprite_19.png")
coinImage = loadImage("Coins_1.png");
characterImage2 = loadImage("Sprite_17.png")
coinsImage2 = loadImage("Coins_2.png");
coinImage3 = loadImage("Coins_3.png");
coinImage4 = loadImage("Coins_4.png")
obstacleImage = loadImage("Obstacle_1.png")
obstacleImage2 = loadImage("Obstacle_2.png")
obstacleImage3 = loadImage("Obstacle_3.png")
obstacleImage4 = loadImage("Obstacle_4.png")
ForestImage = loadImage("377cd1155e4ea2a185fd360eeda8b943.jpg");
MonsterImage = loadAnimation("MONSTER_1.png","MONSTER_2.png","MONSTER_3.png","MONSTER_4.png","MONSTER_5.png","MONSTER_6.png","MONSTER_7.png","MONSTER_8.png")
MonsterImage2 = loadImage("MONSTER_3.png")
groundImage = loadImage("ground.png")
//NextButtonImage = loadImage("Next.png");
//RestartButtonImage = loadImage("Restart.png");

//doorImage = loadImage("door.png");
  
//climber = loadImage("climber.png");
   
//ghostImage = loadImage("ghost-standing.png");
  

}


function setup()
{ createCanvas(600,600)
 

  character = createSprite(300,500,200,200);
  character.addAnimation("running",CharacterImage);
  
  
  Monster = createSprite(50,500,50,50);
  Monster.addAnimation("villian",MonsterImage);
  //Monster.scale = 2;

  ground  = createSprite(300,570,900,30)
  ground.addImage("GROUND",groundImage)
  ground.velocityX = -5
 //spooky0.loop()
  
  //RestartButton = createSprite(300,300)
  //RestartButton.addImage(RestartButtonImage);
//  nextButton = createSprite(400,300)
  //nextButton.addImage(NextButtonImage)
 score = 0;


coinGroup = new Group()
obstacleGroup = new Group()

}


function draw()
{
  background(ForestImage)
textSize(35)
  fill("Blue")
   
   if(gameState === "Start" )
   {text("Welcome to FOREST RUN",50,300 )
       text("Press Space to Start ",100,450)
      if(keyDown("SPACE"))
      {
        gameState = "Level1";
      }

   }
   if(gameState === "Level1")
   {

   //  RestartButton.visible = false;
  // nextButton.visible = false;
    text("score "+score,300,40);
    if(ground.x<20 )
    {
      ground.x = ground.width/2
    }
    character.collide(ground)
    Monster.collide(ground)

 
    if( Monster.isTouching(character))
    {
      gameState = "End"
    }  
  
   
    if(keyDown("SPACE"))
    {
      character.velocityY = -10
    } 
    if(coinGroup.isTouching(character))
    {
      coinGroup.destroyEach();
      score =score +15 
    }
     //character.collide(ground)
    
    if(obstacleGroup.isTouching(character))
    {
      character.velocityX = -5;
    }
    
      
     
      
      

     character.velocityY = character.velocityY + 0.5;
    spawnCoins()
    spawnObstacles()
    drawSprites() 
  }





















  


  
  if(gameState === "End")
  {
    
    //  character.addImage(characterImage2);  
    //  Monster.addImage(MonsterImage2);
    text("GAME OVER!",300,500);
    text("Press r to RESTART",200,300)
        if(keyDown("r"))    {
            gameState = "Level1";
           
          
          character.x = 300
          character.velocityX = 0;
          score = 0;
          drawSprites()
    
        }

      obstacleGroup.destroyEach();
     coinGroup.destroyEach();
    //  nextButton.visible = true;
       
   
  } }


    

  


  



function spawnCoins()
{
  if(frameCount % 60 === 0) {
    coins = createSprite(1200,200);
var i = Math.round(random(1,4))
switch(i)
{
  case 1 : coins.addImage(coinImage);
  break;
  case 2 : coins.addImage(coinsImage2 );
  break;

  case 3 : coins.addImage(coinImage3);
  break;
  
  case 4 : coins.addImage(coinImage4);
  default: break

}

   if(gameState === "End")
   {
     coinGroup.destroyEach(coins);
     obstacleGroup.destroyEach(obstacles);

   }
    
    coins.velocityX = -5;
    coins.scale = 0.3
      coins.y = Math.round(random(120,400));
      coins.lifetime = 600;
      coinGroup.add(coins)

}
}

function spawnObstacles()
{
if(frameCount % 100 === 0) {
  obstacles = createSprite(800,500);
var i = Math.round(random(1,4))
obstacles.velocityX = -5;
    obstacles.scale = 0.3

      obstacles.lifetime = 600;
      obstacleGroup.add(obstacles)
      
switch(i)
{
case 1 : obstacles.addImage(obstacleImage);
break;
case 2 : obstacles.addImage(obstacleImage2 );
break;

case 3 : obstacles.addImage(obstacleImage4);
break;

case 4: obstacles.addImage(obstacleImage3);
default :break;
}


}
}
