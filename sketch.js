var towerImg,tower
var doorImg,door,doorsGroup
var climberImg,climber,climbersGroup
var ghostImg,ghost
var invisibleBlock,invisibleBlockGroup
var GameState=("Play");
function preload(){
towerImg=loadImage("tower.png");
doorImg=loadImage("door.png");
climberImg=loadImage("climber.png");
ghostImg=loadImage("ghost-standing.png");
spookysound=loadSound("spooky.wav");
}
function setup()
{
createCanvas(600,600);
tower=createSprite(300,300);
tower.addImage("tower",towerImg);
tower.velocityY=1;
doorsGroup=new Group();
climbersGroup=new Group();
invisibleBlockGroup=new Group();
ghost=createSprite(200,200,50,50);
ghost.scale=.3;
ghost.addImage("ghost",ghostImg);
}
function draw(){
background(0);
if (GameState==="Play")
{
if(keyDown("left_arrow")){
ghost.x=ghost.x-3;

}
if(keyDown("right_arrow")){
ghost.x=ghost.x+3;

}
if(keyDown("space")){
ghost.velocityY=-10;
}


  
  
  
  
}
drawSprites();
}








