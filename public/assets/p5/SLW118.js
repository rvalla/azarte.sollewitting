/*
Wall Drawing 118
On a wall surface, any continuous stretch of wall,
using a hard pencil, place fifty points at random.
The points should be evenly distributed over the
area of the wall. All of the points should be
connected by straight lines.
*/

let bg, bc, c, cDirections, cLimit;
let points;

function setup() {
	createCanvas(windowWidth, windowHeight);
	bc = createColor();
    cDirections = [1,1,1];
    cLimit = 187;
    bg = color(cLimit,cLimit,cLimit);
	background(bg);
	noLoop();
	strokeWeight(width/500);
    points = [];
	print("Sol Le Witting: 118");
}

function mousePressed(){
	points.push([mouseX, mouseY]);
    drawWall();
}

function drawWall(){
    c = bc;
    for (let i = 0; i < points.length - 1; i++){
        for (let j = i+1; j < points.length; j++){
            stroke(c);
            line(points[i][0], points[i][1], points[j][0], points[j][1]);
            c = updateColor();
        }
    }
}

function doubleClicked() {
	background(bg);
	bc = createColor();
    c = bc; 
	points = [];
    return false;
}

function keyPressed(){
	if (key=="s" || key=="S"){
		saveCanvas("SLW118.jpg");
	}
}

function createColor() {
	let r = map(second(), 0, 59, 0, 90) + random(30);
	let g = map(minute(), 0, 59, 0, 90) + random(30);
	let b = map(hour(), 0, 23, 0, 90) + random(30);
	return color(r,g,b);
}

function updateColor(){
    let r = (red(c) + random(3) * cDirections[0])%187;
    let g = (green(c) + random(3) * cDirections[1])%187;
    let b = (blue(c) + random(3) * cDirections[2])%187;
    updateCDirections(r,g,b);
    return color(r,g,b);
}

function updateCDirections(r,g,b){
    if (r > 184){
        cDirections[0] = -1;
    } else if (r < 3){
        cDirections[0] = 1;
    }
    if (g > 184){
        cDirections[1] = -1;
    } else if (g < 3){
        cDirections[1] = 1;
    }
    if (b > 184){
        cDirections[2] = -1;
    } else if (b < 3){
        cDirections[2] = 1;
    }
}