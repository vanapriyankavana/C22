
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var canvas;
var engine,world,object,ground,ball;

function setup() {
  canvas = createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var object_options ={ isStatic: true}; 
  object=Bodies.rectangle(200,100,50,50,object_options);
  World.add(world,object);
  console.log(object);
  
  var ground_options={ isStatic: true };
  ground=Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  console.log(ground);
  //console.log(object.type);
  //console.log(object.position.x);
  //console.log(object.position.y);
  var ball_options={ restitution: 0.5};
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  
}

function draw() {
  background("gold"); 
  Engine.update(engine);
  rectMode(CENTER);
  //rect(200,200,50,50);
  rect(object.position.x,object.position.y,50,50);
  rect(ground.position.x,ground.position.y,50,50);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);
}
