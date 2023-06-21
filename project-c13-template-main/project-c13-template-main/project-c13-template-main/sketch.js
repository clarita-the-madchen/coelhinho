var garden,rabbit;
var gardenImg,rabbitImg;
var select_sprites 

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  select_sprites = Math.round(random(1,3));

  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      Iphone();
    } else if (select_sprites == 2){
      Outono();
    } else {
      Auntumn();
    }
  }

  rabbit.x = World.mouseX

  drawSprites();
  
}

function Iphone() {
apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;


}

function Outono() {
  foia = createSprite(random(50,350),40,10,10);
  foia.addImage(orangeImg);
  foia.scale=0.07;
  foia.velocityY = 3;
  foia.lifetime = 150;
  }

  function Auntumn() {
    foiaVermeia = createSprite(random(50,350),40,10,10);
    foiaVermeia.addImage(redImg);
    foiaVermeia.scale=0.07;
    foiaVermeia.velocityY = 3;
    foiaVermeia.lifetime = 150;
    }