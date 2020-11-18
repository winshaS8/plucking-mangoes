class constrain
{
    constructor(bodyA ,pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.4,
            length:10
        }
        this.pointB = pointB;
        this.constrain = Constraint.create(options);
        World.add(world,this.constrain);
    }
    fly()
    {
        this.constrain.bodyA = null;
    }
    display()
    {
       if(this.constrain.bodyA)       
       {
       var pointA = this.constrain.bodyA.position;
       var pointB = this.pointB;
       strokeWeight(4);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
       }
    }
}