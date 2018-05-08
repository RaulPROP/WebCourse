var circles = [];
var destinations = [];

var soundDictionary = {
	'q': {
		sound: new Howl({src:['assets/sounds/sounds/bubbles.mp3']})
	},
	'w': {
		sound: new Howl({src:['assets/sounds/sounds/clay.mp3']})
	},
	'e': {
		sound: new Howl({src:['assets/sounds/sounds/confetti.mp3']})
	},
	'r': {
		sound: new Howl({src:['assets/sounds/sounds/corona.mp3']})
	},
	't': {
		sound: new Howl({src:['assets/sounds/sounds/dotted-spiral.mp3']})
	},
	'y': {
		sound: new Howl({src:['assets/sounds/sounds/flash-1.mp3']})
	},
	'u': {
		sound: new Howl({src:['assets/sounds/sounds/flash-2.mp3']})
	},
	'i': {
		sound: new Howl({src:['assets/sounds/sounds/flash-3.mp3']})
	},
	'o': {
		sound: new Howl({src:['assets/sounds/sounds/glimmer.mp3']})
	},
	'p': {
		sound: new Howl({src:['assets/sounds/sounds/moon.mp3']})
	},
	'a': {
		sound: new Howl({src:['assets/sounds/sounds/pinwheel.mp3']})
	},
	's': {
		sound: new Howl({src:['assets/sounds/sounds/piston-1.mp3']})
	},
	'd': {
		sound: new Howl({src:['assets/sounds/sounds/piston-2.mp3']})
	},
	'f': {
		sound: new Howl({src:['assets/sounds/sounds/piston-3.mp3']})
	},
	'g': {
		sound: new Howl({src:['assets/sounds/sounds/prism-1.mp3']})
	},
	'h': {
		sound: new Howl({src:['assets/sounds/sounds/prism-2.mp3']})
	},
	'j': {
		sound: new Howl({src:['assets/sounds/sounds/prism-3.mp3']})
	},
	'k': {
		sound: new Howl({src:['assets/sounds/sounds/splits.mp3']})
	},
	'l': {
		sound: new Howl({src:['assets/sounds/sounds/squiggle.mp3']})
	},
	'z': {
		sound: new Howl({src:['assets/sounds/sounds/strike.mp3']})
	},
	'x': {
		sound: new Howl({src:['assets/sounds/sounds/suspension.mp3']})
	},
	'c': {
		sound: new Howl({src:['assets/sounds/sounds/timer.mp3']})
	},
	'v': {
		sound: new Howl({src:['assets/sounds/sounds/ufo.mp3']})
	},
	'b': {
		sound: new Howl({src:['assets/sounds/sounds/veil.mp3']})
	},
	'n': {
		sound: new Howl({src:['assets/sounds/sounds/wipe.mp3']})
	},
	'm': {
		sound: new Howl({src:['assets/sounds/sounds/zig-zag.mp3']})
	}
};

var keys = [];

function onKeyDown(event) {

	console.log(event.key)

	if (soundDictionary[event.key]) {
		soundDictionary[event.key].sound.play();
	}
	else {
		// Random sound
		var soundKeys = Object.keys(soundDictionary);
		var randomItem = soundKeys[Math.floor(soundKeys.length * Math.random())];
		soundDictionary[randomItem].sound.play();
	}

	var maxPoints = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();
	var point = randomPoint * maxPoints;

	var blue = Math.random() * 0.25;
	var plusB = Math.random() < 0.5;

	var green = Math.random() * 0.2;

	var randomSize = Math.random() * 100;
	var plusSize = Math.random() < 0.5;

	var size = plusSize? 200+randomSize : 200-randomSize;

	var circle = new Path.Circle(point, size);
	circle.fillColor = "steelblue";

	if (plusB) {
		circle.fillColor.blue += blue;
	}
	else {
		circle.fillColor.blue -= blue;
	}
	circle.fillColor.green -= green;

	circles.push(circle);

	var destination = Point.random() * maxPoints;
	destinations.push(destination);

	var text = new PointText({
		point: circle.position,
		justification: 'center',
		fontSize: size,
		fillColor: 'black'
	});

	text.content = event.key;

	keys.push(text);

	console.log("C: "+circles.length);
	console.log("T: "+keys.length);
	console.log("D: "+destinations.length);

}

function onFrame(event) {
	for (var i = 0; i < circles.length; i++) {
		if (circles[i].area < 1) {
			circles[i].remove();
			circles.splice(i,1);
			keys[i].remove();
			keys.splice(i,1);
			destinations.splice(i,1);
			i--;
		}
		else {
			circles[i].fillColor.hue += 2;
			circles[i].scale(0.92);
			var vector = destinations[i] - circles[i].position;
			circles[i].position += vector / 30;
			keys[i].position = circles[i].position;
			keys[i].scale(0.92);
		}
	}
	
}