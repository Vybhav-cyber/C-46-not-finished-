class Player  {
    constructor(x, y){

      this.body = Bodies.rectangle(x, y, 50, 50);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("images/player.png");
      World.add(world, this.body);
    }

playerLeft(){
  this.body.position.x = this.body.position.x-5; 
}

playerRight(){
  this.body.position.x = this.body.position.x+5; 
}

playerDown(){
  this.body.position.y = this.body.position.y+15; 
}

playerUp(){
  this.body.position.y = this.body.position.y-5; 
}


    display(){
      imageMode(CORNER);
      //matter.body.setCentre(this.body, );
      image(this.image, this.body.position.x, this.body.position.y-20, this.width, this.height);
    }
}