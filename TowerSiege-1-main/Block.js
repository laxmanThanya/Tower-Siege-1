class Block{
    constructor(x, y,width,height) {
        var options = {
          isStatic : false,
            'restitution':0.8,
            'friction':0.001
            
        }
          this.body = Bodies.rectangle(x, y,width,height, options);
          this.visibility=225;
          this.width=width;
          this.height=height;
          World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 3){
        var pos=this.body.position;
        push();
        rotate(this.body.angle);
        translate(pos.x,pos.y);
        fill("cyan");
        rect(0,0,this.width,this.height);
        pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility -5;
          pop();
          
        }
      }
}