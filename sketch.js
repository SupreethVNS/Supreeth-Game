
function preload() {
mountainImage=loadImage("mountain bg.jpg");
bheemImage=loadImage("bheem-removebg-preview.png");

chandramukhiImage=loadImage("Chandramukhi.png");

}

function setup() {
createCanvas(displayWidth*6,displayHeight)
mountain=createSprite(displayWidth*3,displayHeight/2,displayWidth*7,displayHeight);
mountain.scale=2
mountain.addImage("mountain",mountainImage);
mountain.velocityX=-2

bheem=createSprite(100,displayHeight-100,20,40);
bheem.addImage(bheemImage);
bheem.velocityX=1;

chandramukhi=createSprite(700,displayHeight-100);
chandramukhi.addImage(chandramukhiImage);
chandramukhi.scale=0.4;
}

function draw() {
background("white")

if(mountain.x<displayWidth*3){
    mountain.x=mountain.displayWidth*3

}
drawSprites()
}