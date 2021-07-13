var fixedRect, movingRect;

var rect2;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  fixedRect1 = createSprite(500,400, 50,80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect2 = createSprite (750, 300, 70, 55);
  rect2.shapeColor = "blue";
  rect2.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, fixedRect)) {
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"
  } else {
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }
 
  drawSprites();
}

function isTouching(movingRect, fixedRect) {

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {

      return true;
    
    } else {
     
     return false;
      }

}


/*
//temp
if (isTouching(movingRect,fixedRect)) {
  movingRect.shapeColor = "red"
  fixedRect.shapeColor = "red"
} else {
  movingRect.shapeColor = "green";
  //rect2.shapeColor = "green";
  fixedRect.shapeColor = "green"
  }


if(isTouching(movingRect, rect2)) {
movingRect.shapeColor = "red"
rect2.shapeColor = "red"
} else 
{
movingRect.shapeColor = "green";
rect2.shapeColor = "green";
fixedRect.shapeColor = "green"
}*/
