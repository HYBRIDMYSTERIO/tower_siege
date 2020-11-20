class Mango {
    constructor(x,y){
        var option = {
            
            'restitution':0.8,
            'friction':1,
            'density':1
            
        }
        this.body = Bodies.rectangle(x,y,50,50,option);
        this.Visibility = 255;
        
    

        World.add(world,this.body);

    }
 displaymango(){
     //console.log(this.body.speed);
     
     if(this.body.speed <3){
     var position = this.body.position;
     rectMode(CENTER);
     fill("green");
     stroke("blue");
     strokeWeight(4);
     rect(position.x,position.y);

     }
     else 
     {

        var position = this.body.position;

        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility;
        tint(255,this.Visibility);
        image(this.image, position.x , position.y,50,50);
        pop();
     }
 }

 score(){
     if(this.Visibility <= 0 && this.Visibility > -1005){
         Score = Score+1;
     }
 }
}

