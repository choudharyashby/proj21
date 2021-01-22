var canvas;
var music;
var blueSurface,orangesurface,purplesurface,greensurface;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas =  createCanvas(500,600);
    
    //create 4 different surfaces
    blueSurface = createSprite(50,590,120,20);
    blueSurface.shapeColor = "blue";

    orangesurface = createSprite(180,590,120,20);
    orangesurface.shapeColor = "orange";

    purplesurface = createSprite(310,590,120,20);
    purplesurface.shapeColor = "purple";

    greensurface = createSprite(440,590,120,20);
    greensurface.shapeColor = "green";


    //create box sprite and give velocity
    
    box = createSprite(random(20,750));
    box.shapeColor = "white";
    box.velocityX  = -4;
    box.scale = 0.3;
    box.velocityY = 4;
}

function draw() {
    background(rgb(169,169,169));

    if(music.play())

    //create edgeSprite
    createEdgeSprites();
    
    box.bounceOff(edges);
    
    
    
//add condition to check if box touching surface and make it box
if(blueSurface.isTouching(box)&& box.bounceOff(blueSurface)){
    box.shapeColor = "blue";

}

if(purplesurface.isTouching(box)&& box.bounceOff(purplesurface)){
    box.shapeColor = "purple";
    
}
if(greensurface.isTouching(box)&& box.bounceOff(greensurface)){
    box.shapeColor = "green";

}
if(orangesSurface.isTouching(ball)){
    ball.shapeColor = rgb(255,128,0);
    ball.velocityX = 0;
    music.stop();

}
 drawSprites();
}