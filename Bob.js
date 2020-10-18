class Bob{

    constructor(x,y,width,height) {
    
        var options={restitution:0.3,friction:0.5,density:1.2,isStatic:true};
    
    
    
        
        
    
        
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,width,height,options);
        
        World.add(world,this.body);
    
    
        
        
    
        
    
       
    
    
    
    
    
    }
    
    display() {
    
    
    
    
       
        
        
      
        
        
    
       
       
     
        
        push();
       translate(this.body.position.x, this.body.position.y);
        
        fill("pink");
    
        imageMode(CENTER)
        ellipse(0, 0, this.width, this.height);
        
        
        
        pop();
    
    
    }
    
    
    
    
    
    
    
    }