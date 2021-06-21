var i, sc1, sc2, sc3, sc4;
var back_img;

var iss; 
var spacecraft; 
var hasDocked = false;

function preload() {
 i = loadImage("images/iss.png")
 sc1 =loadImage("images/spacecraft1.png");
 sc2 = loadImage("images/spacecraft2.png");
 sc3 = loadImage("images/spacecraft3.png");
 sc4 = loadImage("images/spacecraft4.png");
 back_img = loadImage("images/spacebg.jpg");
}


function setup() {
  createCanvas(800, 600);

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(i);
  iss.scale =0.8; 

  spacecraft = createSprite(400, 400, 50, 50);
   spacecraft.addImage(sc1);
  spacecraft.scale = 0.3;
}

function draw() {
  background(back_img);

    if(keyIsDown(LEFT_ARROW)) {
   spacecraft.changeImage(sc2);
  }

  drawSprites();
}

function mousePressed() {
  
}