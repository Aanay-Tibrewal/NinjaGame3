
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ninjaAnimationRun,ninjaAnimationAttack,ninjaAnimationJump,ninjaAnimationDead,ninjaAnimationIdle;
var  zombieAnimation;

var ninja,nin;

var bgImg,bg;

var tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9, tile10, tile11, tile12, tile13, tile14, tile15, tile16; 

var edges, ground, tilesGroup;

function preload()
{
	ninjaAnimationRun = loadAnimation("ninja/Run__000.png",  "ninja/Run__002.png", "ninja/Run__003.png",
	 "ninja/Run__004.png",  "ninja/Run__006.png", "ninja/Run__008.png", "ninja/Run__009.png");

//	ninjaAnimationAttack = loadAnimation("ninja/Attack__001", "ninja/Attack__002", "ninja/Attack__003",
//	 "ninja/Attack__004", "ninja/Attack__005", "ninja/Attack__006", "ninja/Attack__007", "ninja/Attack__008",
//	  "ninja/Attack__009");

//	 ninjaAnimationJump = loadAnimation("ninja/Jump__000", "ninja/Jump__001", "ninja/Jump__002", "ninja/Jump__003", 
//	  "ninja/Jump__004", "ninja/Jump__005", "ninja/Jump__006", "ninja/Jump__007", "ninja/Jump__008", "ninja/Jump__009", );

	  ninjaAnimationIdle = loadAnimation("ninja/Idle__000.png", "ninja/Idle__001.png", "ninja/Idle__002.png", "ninja/Idle__003.png",
	   "ninja/Idle__005.png", "ninja/Idle__004.png", "ninja/Idle__006.png", "ninja/Idle__007.png", "ninja/Idle__008.png", "ninja/Idle__009.png", );

	tile1 = loadImage("tiles/Tile (1).png")
	tile2 = loadImage("tiles/Tile (2).png")
	tile3 = loadImage("tiles/Tile (3).png")
	tile4 = loadImage("tiles/Tile (4).png")
	tile5 = loadImage("tiles/Tile (5).png");

 //nin = loadImage("ninja/tenor.gif");
 bgImg = loadImage("graveYard.jpg");

}

function setup() {
	createCanvas(displayWidth - 50, displayHeight - 50);


	engine = Engine.create();
	world = engine.world;

	// ninja = new Ninja(100,100,20,20);
	bg = createSprite(displayWidth/2,displayHeight/2,0,0);
	bg.addImage(bgImg);
	bg.scale = 2.6;
	bg.velocityX = -3;
	

   ninja = createSprite(100,displayHeight/2,20,20);
	ninja.addAnimation("n_idle",ninjaAnimationIdle);
	ninja.addAnimation("n_run",ninjaAnimationRun);
	ninja.scale = 0.25;
//	ninja.addImage("ninimg",nin);

 ground = createSprite(100,displayHeight/2 + 10,100,10);
ground.shapeColor = "black";
	edges = createEdgeSprites();
	
tilesGroup = new Group();

	Engine.run(engine);
  
}


function draw() {
  
  background("black");
//console.log(ninja.y);
  ninja.collide(edges);
  ninja.collide(ground);

  if(bg.x < 0){
		bg.x = bg.width/2;
		//bg.y = displayHeight/2;
}
//if(ninja.y >= 95){
//	ninja.changeAnimation("n_idle", ninjaAnimationIdle);
//}

if(keyDown("space") && ninja.y >= 659){
	ninja.velocityY = -10;

}

ninja.velocityY = ninja.velocityY + 0.5;
if(keyDown("s")){
	ground.destroy();
	ninja.changeAnimation("n_run");
}



spawnTiles();

if (ninja.isTouching(tilesGroup)){
	ninja.velocityY = 0;
}
 // NINJA.display();
  drawSprites();
 
}

function spawnTiles(){
	if (frameCount % 60 === 0) {
		var tile = createSprite(displayWidth + 10);
		tile.y = Math.round(random(100,displayHeight));
		var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: tile.addImage(tile1);
              break;
      case 2: tile.addImage(tile2);
              break;
      case 3: tile.addImage(tile3);
              break;
      case 4: tile.addImage(tile4);
              break;
      case 5: tile.addImage(tile5);
              break;
      default: break;
    }
	tile.scale = 0.5;
	tile.velocityX = -3;
		
	tilesGroup.add(tile);

		 //assign lifetime to the variable
		// tile.lifetime = 200;
	
		//adjust the depth
		//cloud.depth = trex.depth;
		//trex.depth = trex.depth + 1;
		
		//add each cloud to the group
		//cloudsGroup.add(cloud);
	  }
	}



