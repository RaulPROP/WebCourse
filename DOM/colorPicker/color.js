var easyColors = 3;
var hardColors = 6;
var nColors = 6;

var colors = createColors(nColors);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("msg");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function() {
	//Set to easy
	nColors = easyColors;
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	resetAll();
});

hardBtn.addEventListener("click", function() {
	//Set to hard
	nColors = hardColors;
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	resetAll();
});

resetBtn.addEventListener("click", resetAll);

colorDisplay.textContent = pickedColor;

function resetAll() {
	console.log("reset");
	colors = createColors(nColors);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	setColors();
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	resetBtn.textContent = "New Colors";
}

function setColors() {
	for (var i = 0; i < nColors; i++) {
		// add initial colors
		squares[i].style.backgroundColor = colors[i];

		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if (clickedColor === pickedColor) {
				// Correct
				messageDisplay.textContent = "Correct!";
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
				resetBtn.textContent = "Play Again?";
			}
			else {
				// Wrong
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
	for (var i = nColors; i < hardColors; i++) {
		console.log(i)
		squares[i].style.backgroundColor = "#232323";
	}
}

function changeColors(color) {
	// Loop through all squares
	for (var i = 0; i < nColors; i++) {
		// Change each color to match color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function createColors(c) {
	var arr = []
	for (var i = 0; i < c; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var color_R = Math.floor(Math.random() * 256);
	var color_G = Math.floor(Math.random() * 256);
	var color_B = Math.floor(Math.random() * 256);
	return "rgb("+color_R+", "+color_G+", "+color_B+")";
}

resetAll();