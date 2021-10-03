
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball1;
var wall;
var angle = 60;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   var ball1_options = {
     restitution: 1
   }

   var wall_options = {
     isStatic: true
   }
   
   ball1 = Bodies.circle(250,100,20,ball1_options)
   World.add(world,ball1)

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  wall = Bodies.rectangle(100,200,100,20,wall_options);
  World.add(world,wall);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball1.position.x,ball1.position.y,20,20);
  //rect(wall.position.x,wall.position.y,200,20);
  Matter.Body.rotate(wall,angle)
  push()
  translate(wall.position.x,wall.position.y)
  rotate(angle)
  rect(0,0,100,20)

  angle += 0.1
  pop()
}

