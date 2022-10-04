var canvas;
var backgroundImage;



function preload() {
backgroundImage = loadImage("./assets/background.jpg");
}

function setup(){
canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(backgroundImage);
  drawSprites();

}