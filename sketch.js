var posX=200;
var posY=200;
function setup() {
  createCanvas(400,400);
}

function draw(){ 
  background('white');
  
  rect(5,mouseY,10,70);
  rect(385,mouseY,10,70);
  posX=posX+1;
  posY=posY+1;
  rect(posX,posY,10,10);
}