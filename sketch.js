var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ninja , ninja_running , ninja_collided,ninja_jumping
var bg , in_ground, cloudsGroup

var ob1 , ob2 , score=0

var gameOver
var checkPointSound

var enemy1,enemy2, enemy3, enemy4, enemy5
var enemygroup

function preload(){
ninja_running = loadAnimation ("Images/R-1.png","Images/R-2.png" , "Images/R-3.png"  )
ninja_collided = loadAnimation ("Images/R-4.png");
ninja_jumping = loadAnimation("Images/J-1.png","Images/J-2.png","Images/J-3.png","Images/J-4.png");

bgImage = loadImage ("Images/backgroundImg.png");

ob1 = loadImage ("Images/Plate 2.png");
ob2 = loadImage ("Images/plate 3.png");

gameoverImg = loadImage ("Images/plate.png");
restartImg = loadImage  ("Images/restart.png");
groundImg = loadImage("Images/ground.png")
enemy1= loadImage("Images/enemy1.png");
enemy2= loadImage("Images/enemy2.png");
enemy3= loadImage("Images/enemy3.png");
enemy4= loadImage("Images/enemy4.png");
enemy5= loadImage("Images/enemy5.png");
cloudImage = loadImage("Images/cloud.png")
}

function setup() {
 createCanvas (1200,640);

  // bg = createSprite(640,height-70,1280,20);
  // bg.visible=false;
  // bg.velocityX = -3
  //bg.addImage("Images/bg",bgImage);
  

 ninja = createSprite(80,height-120,20,50);
 ninja.addAnimation("running",ninja_running);
 ninja.addAnimation("collided",ninja_collided);
 ninja.addAnimation("jumping",ninja_jumping);
 ninja.scale = 1.3;
 
  
  gameover = createSprite(300,100);
  gameover.addImage(gameoverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
 
 gameover.scale = 0.8;
  restart.scale = 0.67;
  
 obGroup = createGroup();
  cloudsGroup = createGroup()
  
 enemygroup = createGroup()
 ground = createSprite(640,height-50,1280,10);
 ground.addImage(groundImg)
 //ground.visible=false
 ground.velocityX = -3

 invisibleground = createSprite(640,height-120,1280,10);
 invisibleground.visible = false;
}

 function draw(){ 
    background(bgImage)
 
  
     gameover.visible = false;
     restart.visible = false;
      
    
      
      score = score + Math.round(getFrameRate()/60);
      
      if(score>0 && score%100 === 0)
      
    if (ground.x < 0){
       ground.x = ground.width/2
      }
      ninja.collide(invisibleground)
      plate()
     Spawnenemy()

      if(keyWentDown("space")){
        ninja.velocityY=-10
        ninja.changeAnimation("jumping")

      }
      if(keyWentUp("space")){
        ninja.changeAnimation("running")
      }
      ninja.velocityY=ninja.velocityY+0.8
     
    

      if(obGroup.isTouching(ninja)){
        
      ninja.velocityY=0

      }
      spawnClouds()
  drawSprites()
  textSize(20)
 text("Score: "+ score, 500,50);

}


function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(width+20,height-300,40,10);
    cloud.y = Math.round(random(100,220));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 300;
    
    //adjust the depth
   
  
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}

function Spawnenemy(){
  if(frameCount%170===0){ 
    enemy = createSprite(width-50,height- 180,10,10);
   // enemy.addImage(enemy1)
   //  enemy.x = Math.round(random(300,500)); 
     enemy.y = Math.round(random(height-180, height - 300));
      enemy.velocityX= -3 
      enemygroup.add(enemy)
      enemy.scale = 0.25
        var rand = Math.round(random(1,5)) 
        switch(rand){ 
          case 1: enemy.addImage(enemy1);
          
           break; 
           case 2: enemy.addImage(enemy2);
            break; 
            case 3: enemy.addImage(enemy3);
             break;
              case 4: enemy.addImage(enemy4);
               break; 
               case 5: enemy.addImage(enemy5);
                break; 
                default: break;
              }
             
            }

          }
function plate(){
if(frameCount%160===0){
 ob = createSprite(width-100,10,10,10);
 ob.x = Math.round(random(300,500));
ob.y = Math.round(random(200,250));
ob.velocityX = -3

obGroup.add(ob);
var rand = Math.round(random(1,2))
switch(rand){
  case 1: ob.addImage(ob1);
  break;
case 2: ob.addImage(ob2);
}

}

}




