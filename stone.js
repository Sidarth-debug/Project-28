class stone{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
    
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("pictures/stone.png");
        World.add(world,this.body);
    }
    display(){
        var stonepos = this.body.position;
        push();
        translate(stonepos.x,stonepos.y);
        imageMode(CENTER);
       image(this.image,0,0,20,20);
        pop();
    }
}