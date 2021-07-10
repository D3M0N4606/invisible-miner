const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box3,box4,box5,b6,b7,b8,b9,b10;
var B,a;

var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,30,30);
    box2 = new Box(920,320,30,30);
   b6 = new Box(920,320,30,30);
   b7 = new Box(900,270,30,30);
   b8= new Box(700,320,30,30);
   b9= new Box(950,310,20,30);
   b10= new Box(900,300,10,30);
    a  = new Oh(810,350);
    push();
    stroke("black")
    fill("red");
    ellipse(700,320,30,30);
    ellipse(220,200,30,30)
    ellipse(900,300,10,30);
    ellipse(220,200,30,30)
    ellipse(700,320,30,30);
    ellipse(220,200,30,30)
    ellipse(700,320,30,30);
    ellipse(220,200,30,30)
    ellipse(700,320,30,30);
    ellipse(220,200,30,30)
   
    pop();
    box3 = new Box(700,240,30,30);
    box4 = new Box(920,240,30,30);
    
    ground = new Ground(600,height,1200,20)
    B = new Oh(810,350)
    
   
     box5=new    Box (810,160,9,9);
     bird1 = new sheeesh(100,100)
}

function draw(){
    background("cyan");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    a.display();
    
    box3.display();
    box4.display();
    B.display();
   
    
    box5.display();
    bird1.display();    
}