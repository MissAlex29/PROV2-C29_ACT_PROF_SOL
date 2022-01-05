const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
var fruit_con;

function setup() {
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  //Guardar molde del suelo en variable 
  ground = new Ground(200,690,600,20);
  

  //Crear opciones del motor físico para la fruta 
  var fruit_options = {
    density:0.001
  };
  //Creamos cuerpo circular para la fruta 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() {
  background(51);
  
  //Mostar suelo
  ground.display();
  
  

  Engine.update(engine);
}




