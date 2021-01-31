class Snowball {
    constructor(x,y) {
      var options = {
          isStatic: false, 
          friction: 0,
          restitution: 0,
          density:0
      }
      this.body = Bodies.rectangle(x,y,40,40, options);
      this.image = loadImage("images/snowball.png");
      Matter.Body.setVelocity(this.body, 2);
      World.add(world, this.body);
    }

  Force(){
 //   Matter.Body.applyForce(this.body, this.body.position, {x: 400, y: 300});
  }

    display(){
      var pos =this.body.position;
      push();  
      fill("brown");
      image(this.image, this.body.position.x, this.body.position.y, 40,40);
      pop();
    }
  };
