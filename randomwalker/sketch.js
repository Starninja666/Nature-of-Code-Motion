function setup() {
  createCanvas(640,360);
  w=new Walker();
}

function draw() {
  background(51);
  w.display();
  w.walk();
  w.show();
}

function Walker(){
  this.trail=[]
  this.x=width/2;
  this.y=height/2;

  this.walk= function(){
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);
        this.trail.push([this.x,this.y]);
  }
  this.display = function() {
        fill(255,255,0);
        ellipse(this.x,this.y,15,15);

    }
  this.show= function(){
        stroke(255,0,0);
        strokeWeight(0.1);
        l=this.trail.length;

        for(i=0;i<l;i++){
            point(this.trail[i][0],this.trail[i][1]);
        }


  }

}