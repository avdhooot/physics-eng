const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

var ground,ball;

function setup() 
{
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  var options ={isStatic:true}
  ground= Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground)

  var property={restitution:1.0}
  ball=Bodies.circle(200,200,30,property)
  World.add(world,ball)
}
function draw()
{
  background("lightgreen");  

  Engine.update(engine)
  
  fill("peru")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20) 
  
  fill("yellow")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
}