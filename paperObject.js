class PaperObject{
       constructor(x,y,radius){
           var options={
               'isStatic':false,
               'restitution':0.3,
               'friction':0.5,
               'density':0.3
           }
           this.radius = radius;
this.body = Bodies.circle (x,y,this.radius,options);
this.x = x;
this.y = y;

World.add(world,this.body);
this.image = loadImage('paper.png');
        } 
    

display(){
    
    push();
    translate(this.body.position.x,this.body.position.y);
    rectMode(CENTER);
    fill("white");
    image(this.image, 0,0, this.radius, this.radius);
pop();
}
};






