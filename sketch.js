var platform;
var countdistanceX = 0;
var gap = 60;
function preload()
{}

function setup() {
  createCanvas(9000, 668);
  
for(i=0; i<50; i++){
platform1 = new Platform(countdistanceX);
countdistanceX = countdistanceX + platform1.rw + gap
gap = random(100,200,300,400,500);
}
  
 
}

function draw() {
  background('skyblue'); 
 drawSprites();
}

