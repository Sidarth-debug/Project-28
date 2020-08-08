class ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var groundpos = this.body.position;
        push();
        fill(255);
        translate(groundpos.x,groundpos.y);
        rect(0,0,this.width,this.height);
        pop();
    }
}