class Snowman {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/snowman.png");
      World.add(world, this.body);
    }
  

    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      
    }
  };
