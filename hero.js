class Hero {
    constructor(x, y) {
      var options = {
          density: 1,
          friction: 1
      };
     
      this.x =x;
      this.y=y;
      this.image = loadImage("images/superhero2.png")
      this.body= Bodies.rectangle(this.x, this.y,options)
      World.add(world, this.body); 
    
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0);
        pop();

    }

  };
  