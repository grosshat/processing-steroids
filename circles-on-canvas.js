function setup() {
	// every artist starts with a blank sheet
	createCanvas(640, 480);
}

function draw() {
	if (mouseIsPressed) {
  		// paint black
    		fill(0);
	} else {
		// paint white
		fill(255);
	}
	// draw circle 80x80 following the cursor
	ellipse(mouseX, mouseY, 100, 100);
}