var canvas;
var music;
var box;
var surface1;
var surface2;
var surface3;
var surface4;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(100,570,150,20);
    surface1.shapeColor=("red");
    

    surface2=createSprite(700,570,150,20);
    surface2.shapeColor=("green");
    
    surface3=createSprite(300,570,150,20);
    surface3.shapeColor=("blue");
    

    surface4=createSprite(490,570,150,20);
    surface4.shapeColor=("black");


    //create box sprite and give velocity
    box=createSprite(random(20,750),0,50,50);
    box.velocityX=3;
    box.velocityY=3;
    box.shapeColor=("white");

}

function draw() {
    background(rgb(169,169,169));
    drawSprites();

    music.play();

    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges[0]);
    box.bounceOff(edges[1]);
    box.bounceOff(edges[2]);
    


    if(surface1.isTouching(box)&&box.bounceOff(surface1)){
        box.shapeColor=("red")
    }

    if(surface2.isTouching(box)&&box.bounceOff(surface2)){
        box.shapeColor=("green")
    }

    if(surface3.isTouching(box)&&box.bounceOff(surface4)){
        box.shapeColor=("blue")
    }

    if(surface4.isTouching(box)){
        box.shapeColor=("black")
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }


    //add condition to check if box touching surface and make it box

}
