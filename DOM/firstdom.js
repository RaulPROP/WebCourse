var grayBG = true;

var jumbo 	= document.querySelector(".jumbotron");
var button 	= document.querySelector("#btn");

jumbo.style.background = "gray";

button.addEventListener("click", function() {
	if (grayBG) {
		jumbo.style.background = "pink";
	}
	else {
		jumbo.style.background = "gray";
	}
	grayBG = !grayBG;
})