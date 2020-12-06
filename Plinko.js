class Plinko{

    constructor(x,y,r){

        var options = {
            isStatic:true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x,this.y,10,options);
     


        World.add(world,this.body);
    }
    
    display(){

        var pos = this.body.position;

        push ()
       translate(pos.x,pos.y);
       rectMode(CENTER)
       strokeWeight(0)
       fill ("white");
       ellipse(0,0,this.r,this.r)
       
     
        pop ()
        for(var i=0; i<= width; i=i+80){
            division.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight))
            }

    }
  
}

