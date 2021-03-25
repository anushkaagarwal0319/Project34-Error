const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

function preload() {
//preload the images here

bg = loadImage("images/sky.jpg");

}

function setup() {
  createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);

  hero = new Hero(900, 100, 10, 10);
  
  ground = new Ground(700, 350, 800, 5);

  fly = new Fly(hero.body, {x:400, y:30});

}

function draw() {
  background(bg);

  hero.display();
  ground.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
}
