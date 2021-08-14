function setup(){
    createCanvas(windowWidth,windowHeight);
   
    p = new Particle(width-50,height/2,1.9);
    p2 = new Particle(width+50,height/2,0.8);
    a = new Attractor(width/2, height/2,3);

}


function draw(){
    background("black");
    // var grav = createVector(0,0.1*p.mass);
    // var wind = createVector(random(-0.5,0.5), 0);
    // var friction = createVector(0,random(-0.05,-0.035));
    // var grav2 = createVector(0,0.1*p2.mass);
    var f = a.calculateAttraction(p);
    var f2 = a.calculateAttraction(p2);
    p.applyForce(f);
    p2.applyForce(f2);


    p.walk();
// p.bounce();
    p.display(50,50);  


    //p.applyForce(friction);
    p.showTrail();
    a.display();

    p2.walk();
 //   p2.bounce();
    p2.display(10,10);  


    //p2.applyForce(friction);
    p2.showTrail();
}

class Particle{
    constructor(x,y,mass) {
        this.pos = createVector(x, y);  
        this.trail = [];
        this.vel = createVector(0,1);     
        this.acc = createVector(0,0);
        this.mass = mass;
    }
    applyForce(force){
      var f=force.copy();
      f.div(this.mass);
      this.acc.add(f);  

    }
    walk(){
        
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0,0);
        this.trail.push([this.pos.x,this.pos.y]);
        // if (this.trail.length > 50 ){
        //   this.trail.shift();
        //}

    }

    display(a,b){
        stroke(255,255,0);
        strokeWeight(8);
        ellipse(this.pos.x, this.pos.y,a,b);
    }

    showTrail(){
        stroke(255,255,0);
        strokeWeight(3);
        for (var i=0;i<this.trail.length;i++){
            point(this.trail[i][0],this.trail[i][1])
        }
      
    }
    bounce(){
      
      if (this.pos.y>=height){
        this.pos.y = height;
        this.vel.y *= -1;
      }
      else if (this.pos.y<=0){
        this.pos.y = 0;
        this.vel.y *= -1
      }
      if (this.pos.x>=width){
        this.pos.x = width;
        this.vel.x *= -1
      }
      else if (this.pos.x <= 0){
        this.pos.x = 0
        
        this.vel.x *= -1
      }
    }
}

class Attractor{
    constructor(w,h,m) {
        this.pos = createVector(w,h);
        this.mass = m;
        this.G = 1;
    }

    calculateAttraction(p){
        var force = p5.Vector.sub(this.pos, p.pos);
        var dist = force.mag();
        dist=constrain(dist,5,25);
        force.normalize();

        var mag = (this.G*this.mass*p.mass)/(23*23);

        force.mult(mag);
        return force;
    }

    display(){
        stroke(255,255,0);
        strokeWeight(8);
        ellipse(this.pos.x, this.pos.y,20,20);
    }

}