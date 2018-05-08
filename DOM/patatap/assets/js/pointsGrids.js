for (var i = 0; i < 1000; i+=100){
	for (var j = 0; j < 1000; j+= 100) {
		var myCircle = new Path.Circle(new Point(i, j), 10);
		var colorR = (i/1000);
		var colorG = (j/1000);
		myCircle.fillColor = 'black';
		myCircle.fillColor.red = colorR;
		myCircle.fillColor.green = colorG;
		myCircle.fillColor.blue = Math.min(colorR,colorG)/Math.max(colorR,colorG);
	}
}