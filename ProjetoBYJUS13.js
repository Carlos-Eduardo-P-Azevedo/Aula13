var arco, arcoImg;
var flecha, flechaImg;
var balao, balaoImg, balaover, balaogre, balaoazu;

function preload(){
  balaoazu = loadImage("balaoazu.png");
  balaogre = loadImage("balaogre.png");
  balaover = loadImage("balaover.png");
  arcoImg = loadImage("Arco.png");
  flechaImg = loadImage("flecha.png");
}

function setup(){
  createCanvas(400,400);

  arco = createSprite(380,200);
  arco.addImage(arcoImg);
}

function draw(){
  background("DeepSkyBlue");
  drawSprites();

  if(mouseWentDown("leftButton")){
   flecha = createSprite(380,arco.y);
   flecha.addImage(flechaImg);
   flecha.velocityX = -4;
   flecha.lifetime = 140;
  }

  if(flecha.isTouching(balao)){
    balao.destroy();
  }

  arco.y = World.mouseY;

  if(frameCount % 40 === 0){

    var posicao = Math.round(random(1,2));
    switch(posicao){
     case 1: balao = createSprite(Math.round(random(20,380)),0);
     balao.addImage(balaoazu);
     balao.velocityY = 3;
     balao.lifetime = 140;
     balao.scale = 1.2;
     balao.setCollider("rectangle",0,0,20,40);
     break;
     case 2: balao = createSprite(0,Math.round(random(380,20)));
     balao.addImage(balaoazu);
     balao.velocityX = 3;
     balao.lifetime = 140;
     balao.scale = 1.2;
     balao.setCollider("rectangle",0,0,20,40);
     break;
     default: break;
   }
   }
   if(frameCount % 60 === 0){

    var posicao1 = Math.round(random(1,2));
    switch(posicao1){
     case 1: balao = createSprite(Math.round(random(20,380)),0);
     balao.addImage(balaogre);
     balao.velocityY = 3;
     balao.lifetime = 140;
     balao.scale = 1.2;
     balao.setCollider("rectangle",0,0,20,40);
     break;
     case 2: balao = createSprite(0,Math.round(random(380,20)));
     balao.addImage(balaogre);
     balao.velocityX = 3;
     balao.lifetime = 140;
     balao.scale = 1.2;
     balao.setCollider("rectangle",0,0,20,40);
     break;
     default: break;
   }
   }
   if(frameCount % 80 === 0){

    var posicao1 = Math.round(random(1,2));
    switch(posicao1){
     case 1: balao = createSprite(Math.round(random(20,380)),0);
     balao.addImage(balaover);
     balao.velocityY = 3;
     balao.lifetime = 140;
     balao.scale = 1.2;
     balao.setCollider("rectangle",0,0,20,40);
     break;
     case 2: balao = createSprite(0,Math.round(random(380,20)));
     balao.addImage(balaover);
     balao.velocityX = 3;
     balao.lifetime = 140;
     balao.scale = 1.2;
     balao.setCollider("rectangle",0,0,20,40);
     break;
     default: break;
   }
   }
}