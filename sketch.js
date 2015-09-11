

function setup() {
	// create a place to draw
	createCanvas(640, 460);
}

function draw() {

	// clear the background
	background(50, 50, 50);

	// set a fill color
	fill(255, 165, 0);
  noStroke();

	// draw the face
	ellipse(320, 308, 70 , 70);

	//draw the dot eye
	fill(0, 0, 0);
	ellipse(307, 301, 10, 10);
	ellipse(337, 301, 10, 10);

	//draw the eye
	fill(255, 255, 255);
	ellipse(307, 301, 13, 13);
	ellipse(335, 301, 13, 13);

	//draw the dot eye
	fill(0, 0, 0);
	ellipse(307, 301, 5, 5);
	ellipse(335, 301, 5, 5);

	// draw a crown
  fill(255, 255, 5);
	triangle(308, 267, 318, 227, 328, 267);
	triangle(288, 267, 298, 227, 308, 267);
	triangle(328, 267, 338, 227, 348, 267);

	// draw a mouth
	fill(0, 0, 0);
	rect(313,325, 20, 5);

	//draw a ciggerette
	stroke(250, 250, 250);
	line(334, 327, 353, 333);

	//draw the sun rays
	fill(255, 165, 0);
	triangle(280, 280, 285, 275, 250, 250);
	triangle(360, 280, 355, 275, 380, 250);

	triangle(280, 340, 285, 345, 265, 370);
	triangle(360, 340, 355, 345, 390, 375);

	triangle(275, 300, 275, 310, 235, 310);
	triangle(365, 310, 365, 300, 410, 310);

	triangle(315, 355, 325, 355, 320, 385);

	//draw coins
	fill(255, 215, 0);
	ellipse(410, 110, 15, 15);
	ellipse(435, 154, 15, 15);
	ellipse(426, 131, 15, 15);
	ellipse(406, 143, 15, 15);
	ellipse(389, 102, 15, 15);

	//draw a sword
	fill(255, 255, 255);
	rect(52, 40, 51, 14);
	triangle(109, 37.5, 109, 57.5, 280, 47.5);
	triangle(97, 53, 103, 53, 100, 91);
	triangle(97, 41, 103, 41, 100, 3);

	//draw a heart
	noStroke();
	fill(255, 192, 203);
	ellipse(204, 120, 31, 31);
	ellipse(235, 120, 31, 31);
	triangle(188, 121, 251, 121, 219.5, 173);

	//draw two red X's
	fill(255, 0, 0);
	quad(260, 100, 262, 102, 184, 167, 182, 165);
	quad(262, 165, 260, 167, 182, 102, 184, 100);

	quad(450, 86, 452, 88, 381, 163, 379, 161);
	quad(452, 161, 450, 163, 379, 88, 381, 86);


}
