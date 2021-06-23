class Launcher{
    constructor(bodyA, pointBi){
        var options = {
            bodyA: bodyA,
            pointB: pointBi,
            stiffness: 0.04,
            length: 10
        }
        this.slingo = Constraint.create(options);
        World.add(world, this.slingo);
        this.pointB = pointBi;
    }

    fly(){
        this.slingo.bodyA = null;
        }

        attach(body){
            this.slingo.bodyA = body;
            }

    display(){
        if(this.slingo.bodyA){
        var pointA = this.slingo.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    
        }

        }
    
    

}//class bracket