const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,ground2;
var block,block2,block3,block4,block5;
var polygon,polygon_image;
var slingshot;

function preload(){
    polygon_image=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700,750,1600,20);
    ground2=new Ground(650,600,300,20);

    
    block = new Block(600,550,60,80);
    block2 = new Block(640,550,60,80);
    block3 = new Block(700,550,60,80);
    block4 = new Block(620,460,60,80);
    block5 = new Block(680,460,60,80);
    block6 = new Block(650,370,60,80);

    polygon = Bodies.circle(mouseX,mouseY,20);
    World.add(world,polygon);
    

    slingshot = new Slingshot(this.polygon,{x:300, y:400});

    
}



function draw(){
background(0);
Engine.update(engine);

stroke(20);
textSize(20);
text("Drag and Release the Hexagon to launch it towards the blocks",100,200);

ground.display();
ground2.display();
block.display(); 
block2.display();
block3.display();
block4.display();
block5.display();   
block6.display();

imageMode(CENTER);
image(polygon_image, polygon.position.x, polygon.position.y,40,40);

slingshot.display();

drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});

}
function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}

