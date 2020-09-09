function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,40,20);

  speed = random(55,90);
  weight = random(400,1500);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor = (80,80,80);
}
var car,wall;
var speed,weight;
function draw() {
  background(255,255,255); 
  car.velocityX = speed; 
  drawSprites();

  if(wall.x-car.x < (car.width+wall.width/2))
  {
    car.velocity=0
    var deformation=0.5 * weight * speed * speed/22509
    if(deformation>180)
    {
       car.shapeColor = color(255,0,0); 
  }   
    if(deformation<180 && deformation>180);
    {
       car.shapeColor = color(230,230,0);
    }
    if(deformation<180)
    {
      car.shapeColor = color(0,255,0)

    }
}

}