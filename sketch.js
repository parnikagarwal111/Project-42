const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drops;

function preload(){
    
}

function setup(){
   createCanvas(400,600);
   engine=Engine.create();
   world=engine.world;

   drops=[];
    
}

function draw(){
    background(0);

    if(frameCount%60===0){
        drops.push(new Drops(random(100,380),0,10));
      }

      for (var l=0; l<400;l++){
        drops[l].display();
      }
    
}   

