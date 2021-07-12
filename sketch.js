var bg,bgImg;

function preload(){
 bgImg = loadImage("assets/City2.jpg");
}

function setup() {
createCanvas(700,600)
bg = createSprite(600,300);
bg.addImage(bgImg);
bg.scale = 2.5;


}

function draw() { 
  background(0); 



bg.velocityX =-2;
if (bg.x <50){
  bg.x = bg.width/2;
}
drawSprites();
}
