class Paper
{

    constructor(x,y,r)
   {
       

       var options={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2


    }

    // this.x=x;
    // this.y=y;
    // this.r=r;
    // this.body=Bodies.circle(this.x,this.y,this.r/2,options)
    this.body=Bodies.circle(x,y,r,options)
    this.radius=r;
    this.image = loadImage("paper.png");
    this.body.scale = 0.3;
    World.add(world, this.body);   
    
    
}
display()
{   
// Hey ansh i have commented ellipse instruction becoz we dont want theellipse to be printed
       // var paperpos=this.body.position;
        imageMode(CENTER)
       image(this.image,this.body.position.x,this.body.position.y,this.radius);
        // push()
        // translate(paperpos.x,paperpos.y);
        // rectMode(CENTER)
        // fill(255,0,255)
        // ellipse(0,0,this.r,this.r);
        // pop()

}      

}
