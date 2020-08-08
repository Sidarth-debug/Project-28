class mango{
    constructor(x,y,radius){
        var options = {
            isStatic : true,
           restitution : 0,
           friction : 1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
       
        this.image = loadImage("pictures/mango.png");
        World.add(world,this.body);
    }
    display(){
        var mangopos = this.body.position;
        push();
        translate(mangopos.x,mangopos.y);
        imageMode(CENTER);
       image(this.image,0,0,50,35);
        pop();
    }
}
