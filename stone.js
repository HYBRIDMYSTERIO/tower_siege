class Stone{
    constructor(x,y){
        var option = {
            'restitution':0.8,
            'friction':0.2,
            'density':1
            
        }
        this.body = Bodies.rectangle(x,y,5,5,option);
    
        
    

        World.add(world,this.body);

    }
 displaystone(){
     var position = this.body.position;
     rectMode(CENTER);
     fill(255);
     stroke("green");
     strokeWeight(4);
     rect(position.x,position.y);
 }
}