var thickness, wall;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(2000,400);

  thickness= random(22,83);

  speed = random(55,90);
  weight = random(400,1500);
  
  bullet = createSprite(50,200,50,10);
  wall = createSprite(1300,200,thickness,height/2);

  bullet.shapeColor = "a colour that will end up being white";

  bullet.velocityX = speed;
}

function draw() {
  background(0,0,255);
  
  console.log(wall.x-bullet.x);
  
  if(isTouching(bullet,wall)){
    bullet.velocityX=0;
    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor = "red";
    }
    else{
      wall.shapeColor = "green";
    }
  }

  
  drawSprites();
}