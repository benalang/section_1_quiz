function setup() {
	// create a place to draw
	createCanvas(640, 360);
}

function draw() {
	// clear the background
	background(0, 0, 50);

	// set the drawing style
	fill(100, 100, 100);
	stroke(255, 255, 255);

	// draw an ellipse
	noStroke();
	fill(0, 80, 50);
	rect(0, 270, 640, 90);

	noStroke();
	fill(0, 40, 25);
	rect(0, 225, 640, 45);

	triangle(-35, 225, 0, 165, 35, 225);
	triangle(35, 225, 70, 165, 105, 225);
	triangle(105, 225, 140, 165, 175, 225);
	triangle(175, 225, 210, 165, 245, 225);
	triangle(245, 225, 280, 165, 315, 225);
	triangle(315, 225, 350, 165, 385, 225);
	triangle(385, 225, 420, 165, 455, 225);
	triangle(455, 225, 490, 165, 525, 225);
	triangle(525, 225, 560, 165, 595, 225);
	triangle(595, 225, 630, 165, 665, 225);
	triangle(665, 225, 700, 165, 735, 225);

	fill(100, 100, 100);
	ellipse(mouseX, mouseY - 50, 110, 60);
	ellipse(mouseX, mouseY - 70, 60, 80);

	fill(75, 75, 75);
	ellipse(mouseX - 55, mouseY - 50, 10, 10);
	ellipse(mouseX - 27, mouseY - 50, 10, 10);
	ellipse(mouseX, mouseY - 50, 10, 10);
	ellipse(mouseX + 27, mouseY - 50, 10, 10);
	ellipse(mouseX + 55, mouseY - 50, 10, 10);



}
