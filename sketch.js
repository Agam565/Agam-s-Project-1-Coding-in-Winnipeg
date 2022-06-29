/*var firstName = "Andrew"
var lastName = "Kinal"
function showMessage(){
var message = "Hello" + " " + firstName +  " " + lastName + "." + " " + "Today" + " " + "you" + " " + "will" + " "+ "learn" + " " + "about" + " " + "Air" + " " + "Purification" + "."
alert(message);
}
showMessage();*/
var airplane,airplaneImg;
var waitBackgroundImg;
var cloud, cloudImg, coin, coinImg;

function preload(){
waitBackgroundImg = loadImage("./Backgrounds/backgroundImg.jpg");
airplaneImg = loadImage("airplane.png");
cloudImg = loadImage("clouds.png");
coinImg = loadImage("coins.png");
}
function setup(){
  createCanvas(windowWidth,windowHeight);

}
function draw(){
  background(waitBackgroundImg);
  fill("red");
  textSize(40);
  text("Agam's Project 1 Coding",width/2-250,height/2-100)
  drawSprites();
}