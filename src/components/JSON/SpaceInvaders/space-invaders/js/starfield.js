/*
	Starfield lets you take a div and turn it into a starfield.

*/

//	Define the starfield class.
function Starfield() {
	this.fps = 30;
	this.canvas = null;
	this.width = 0;
	this.height = 0;
	this.minVelocity = 5;
	this.maxVelocity = 25;
	this.stars = 100;
	this.intervalId = 0;
	this.backgroundColor = "#FFFFFF"
	this.starColor = "#FFFFFF"
}

//	The main function - initialises the starfield.
Starfield.prototype.initialise = function(div, container) {
	console.log(container.style.width)
	console.log(container.clientWidth, container.clientHeight)
	var self = this;

	//	Store the div.
	this.containerDiv = div;
	self.width = container.clientWidth;
	self.height = container.clientHeight;

	window.addEventListener('resize', (event) => {
		console.log('opa')
		self.width = container.clientWidth;
		self.height = container.clientHeight;
		self.canvas.width = container.clientWidth;
		self.canvas.height = container.clientHeight;
		self.draw();
 	})

	//	Create the canvas.
	var canvas = document.createElement('canvas');
	canvas.width = container.clientWidth;
	canvas.height = container.clientHeight;

	div.appendChild(canvas);
	this.canvas = canvas;	
};

Starfield.prototype.start = function() {	

	var self = this;
	//	Start the timer.
	this.intervalId = setInterval(function() {
		self.update();
		self.draw();
	}, 1000 / this.fps);
};

Starfield.prototype.enter = function(properties) {
	console.log('eae',properties)
	this.backgroundColor = properties.color
	this.starColor = properties.starColor
	this.stars = properties.starNumber;

	//	Create the stars.
	var stars = [];
	for(var i=0; i<this.stars; i++) {
		stars[i] = new Star(Math.random()*this.width, Math.random()*this.height, Math.random()*3+1,
		 (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity);
	}
	this.stars = stars;
}

Starfield.prototype.stop = function() {
	clearInterval(this.intervalId);
};

Starfield.prototype.update = function() {
	var dt = 1 / this.fps;

	for(var i=0; i<this.stars.length; i++) {
		var star = this.stars[i];
		star.y += dt * star.velocity;
		//	If the star has moved from the bottom of the screen, spawn it at the top.
		if(star.y > this.height) {
			this.stars[i] = new Star(Math.random()*this.width, 0, Math.random()*3+1, 
		 	(Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity);
		}
	}
};

Starfield.prototype.draw = function() {
	//	Get the drawing context.
	var ctx = this.canvas.getContext("2d");

	//	Draw the background.
	if (this.backgroundColor) {
		ctx.fillStyle = this.backgroundColor;
		ctx.fillRect(0, 0, this.width, this.height);
	}
	

	//	Draw stars.
	if (this.starColor) {
		ctx.fillStyle = this.starColor;
			for(var i=0; i<this.stars.length;i++) {
				var star = this.stars[i];
				ctx.fillRect(star.x, star.y, star.size, star.size);
			}
		};
	}
	

function Star(x, y, size, velocity) {
	this.x = x;
	this.y = y; 
	this.size = size;
	this.velocity = velocity;
}

export { Starfield };