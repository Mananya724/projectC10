var seaImg,shipImg,bg,flow,ship_flowing


function preload(){
sealIng = loadImage("sea.png")
 ship_flowing= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  ship_flowing.scale = 0.5;
  ship_flowing.x = 50
  sealIng=createSprite(200,200,350,10)
  sealIng.x=sealIng.width/2
  sealIng.addImage( "bg", sealIng)
  ship_flowing=createSprite=(200,200) 
  sship_flowing= createSprite(50,160,20,50);
  ship_flowing.addAnimation(ship_flowing);
  ship_flowing.scale=0.5
}

function draw() {
 background("blue");
 shipImg.collide(seaImg)
  if(seaImg.x<0){
  seaImg.x=seaImg.width/2
 }
}