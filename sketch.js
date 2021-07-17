var pathImg,Runner1Img;
var surfer 



function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
Runner1Img = loadAnimation(Runner-1)
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

if(path.y>400){
path.y = height/2

createSprite
}

}





function draw() {
  background(0);

}
