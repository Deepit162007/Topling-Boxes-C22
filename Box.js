class Box{
    constructor(x,y,width,height){

        var ball_option={
            'restitution':0.5,
            'friction': 1.0
        }   

        this.box = Bodies.rectangle(x,y,width,height,ball_option);
        this.width =  width;
        this.height = height;
        World.add(world,this.box);
    }


    display(){
        var pos = this.box.position;
        var angle = this.box.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }


}     