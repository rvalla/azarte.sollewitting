/*
Wall Drawing 793A
Irregular wavy color bands.
*/

let bg, colors;
let step, noise, nLimit;

function setup() {
	createCanvas(windowWidth, windowHeight);
	bg = color(187,187,187);
	background(bg);
	colors = createColors();
	background(bg);
	step = height/5;
	noise = [0,0,0,0,0,0];
	noiseDirections = [1,1,1,1,1,1];
	nLimit = [0.05];
	noLoop();
	strokeWeight(width/100);
	print("Sol Le Witting: 793A");
}

function mouseDragged(){
	stroke(colors[5]);
	line(mouseX,0,mouseX,mouseY);
	for(let i = 0; i < 6; i++){
		updateNoise();
		stroke(colors[i]);
		line(mouseX, mouseY + (step + noise[i]) * i, mouseX, mouseY + (step + noise[i]) * (i + 1));
	}
}

function doubleClicked() {
	background(bg);
	colors = createColors();
	newNoise();
	newNoiseLimits();
	return false;
}

function keyPressed(){
	if (key=="s" || key=="S"){
		saveCanvas("SLW793A.jpg");
	}
}

function newNoise(){
	noise = [0,0,0,0,0,0];
	noiseDirections = [1,1,1,1,1,1];
}

function updateNoise(){
	for (let i = 0; i < noise.length; i++){
		if (random() < 0.01) {
			noiseDirections[i] = noiseDirections[i] * -1;
		}
		error = random(nLimit);
		noise[i] += error * noiseDirections[i];
	}
}

function createColors() {
	let c = [];
	for (let i = 0; i < 6; i++){
		let r = map(second(), 0, 59, 0, 120) + random(60) + 30;
		let g = map(minute(), 0, 59, 0, 120) + random(60) + 30;
		let b = map(hour(), 0, 23, 0, 120) + random(60) + 30;
		c.push(color(r,g,b));
	}
	return c
}