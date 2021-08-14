function setup(){
	createCanvas(windowWidth, windowHeight);
	p = new Photon();
	xoff = 0;
	yoff = 0;
}


function draw(){
	background("black");
	p.walk();
	p.display();	
	p.showTrail();
}

// function mouseClicked(){
// 	p.trail = [];
// 	return false;
// 	p.pos = createVector(mouseX,mouseY);
// }

class Photon{
	constructor() {
		//this.pos = createVector(windowWidth/2, windowHeight/2);
		this.trail = []
		//this.vel = createVector(0,0); // does a 0 magnitude vector have direction
		//this.acc = p5.Vector.fromAngle(0.7);
		//this.acc.setMag(0.01);
	}

	walk(){

  	//translate(windowWidth/2, windowHeight/2);
  	//scale(1,-1);

		//this.acc = fromAngle(random(TWO_PI));
		//this.acc = createVector(noise(xoff)*windowWidth,noise(yoff)*windowHeight);



		//this.acc = createVector(random(-0.4,0.4),random(-0.4,0.4));
		//this.acc.setMag(0.4);
		//this.acc.mult(5);


		//var mouse = createVector(mouseX,mouseY);
		//this.acc = p5.Vector.sub(mouse, this.pos) // a static function: not called on an object, but the idea of an object
		
		//this.acc.mult(0.01);
		//this.acc.normalize();	
		
		
		//this.acc.rotate(radians(2));
		//this.pos.rotate(radians(1));
		this.pos = createVector(noise(xoff)*windowWidth,noise(yoff)*windowHeight);
		xoff = xoff + 0.01;
		yoff = yoff + 0.03;

		//this.vel.add(this.acc);
		//this.pos.add(this.vel);
		this.trail.push([this.pos.x,this.pos.y]);

	}

	display(){
		stroke(255,255,0);
		strokeWeight(8);
		ellipse(this.pos.x, this.pos.y,10,20);
	}

	showTrail(){
		stroke(255,255,0);
		strokeWeight(3);
		for (var i=0;i<this.trail.length;i++){
			point(this.trail[i][0],this.trail[i][1])
		}
	}
}