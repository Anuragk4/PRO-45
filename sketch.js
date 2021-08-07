var car1;
var carimg;
var trackimg;
function preload(){
  carimg=loadImage("car1.webp")
  trackimg=loadImage("track.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  background(255,255,255);

  drawSprites();
}