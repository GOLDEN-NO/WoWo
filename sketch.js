var Farm,FarmBackground,marketBackground,market
var dialogue1,dialogue2
var gameState
gameState = 0

function preload(){
FarmBackground = loadImage("Bo!.jpg")
marketBackground = loadImage("Shop.png")
}
function setup(){
createCanvas(windowWidth, windowHeight);
Farm = createSprite(windowWidth/2,windowHeight/2,windowWidth, windowHeight)
Farm.addImage(FarmBackground)
Farm.scale = 0.4

market = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
market.addImage(marketBackground)
market.scale = 4.1
market.visible = false

dialogue1 = createSprite(windowWidth/2,100,600,150)
dialogue1.shapeColor = "black"
dialogue2 = createSprite(windowWidth/2,100,600,150)
dialogue2.shapeColor = "black"
dialogue2.visible = false
}
function draw(){
    drawSprites()
fill("yellow")
stroke("black")
strokeWeight(4)
if(gameState === 0){
    text("THE TEXT WOW",windowWidth/2-50,100)
}
if(mousePressedOver(Farm)&&gameState === 0){
    dialogue1.destroy()
    gameState = 1
}
if(gameState===1){
        dialogue2.visible = true

    text("MORE TEXT WOW",windowWidth/2-50,100)
}
if(gameState === 1&&mousePressedOver(Farm)){
     market.visible = true
     dialogue2.destroy()
     Farm.visible = false  
         gameState = 2

}
}       