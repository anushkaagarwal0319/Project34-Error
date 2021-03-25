class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length:300
        }

        this.pointB = pointB
    
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        stroke("black")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}

