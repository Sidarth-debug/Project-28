class tree{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
     this.body = Bodies.rectangle(x,y,width,height);
     this.width = width;
     this.height = height;
     this.image = loadImage("pictures/tree.png");
     World.add(world,this.body);
    
    }
    display(){
        //image(this.image,100,600);
        var pos = this.body.position;
       
        
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,200,300);
     
        pop();
    }
}