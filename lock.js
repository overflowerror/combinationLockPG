var context;

const countOfNumbers = 32;

var lockinit = function () {
	var canvas = document.getElementById("canvas");
	context = canvas.getContext('2d');
	drawLock();
	drawDial(0);
}

var drawLock = function() {
	context.save();
	context.translate(100, 100);
	context.fillStyle = "#999";
	context.beginPath();
	context.arc(0, 0, 100, 0, 2 * Math.PI);
	context.closePath();
	context.fill();
	context.beginPath();
	context.moveTo(0, - 82);
	context.lineTo(- 6, - 95);
	context.lineTo(+ 6, - 95);
	context.closePath();
	context.stroke();
	context.restore();
	
}

var drawDial = function(rot) {
	context.save();
	context.translate(100, 100);
	context.rotate(rot)
	context.fillStyle = "#555";
	context.beginPath();
	context.arc(0, 0, 80, 0, 2 * Math.PI);
	context.closePath();
	context.fill();
	context.fillStyle = "#111";
	context.beginPath();
	context.arc(0, 0, 7, 0, 2 * Math.PI);
	context.closePath();
	context.fill();
	context.fillStyle = "#fff";
	for (var i = 0; i < countOfNumbers; i++) {
		context.beginPath();
		context.fillText(i + 1, 72 * Math.cos(2 * Math.PI / countOfNumbers * i - Math.PI / 2) - 4, 72 * Math.sin(2 * Math.PI / countOfNumbers * i - Math.PI / 2) + 3);
		context.closePath();
		context.fill();
	}
	context.restore();
}

var angleToNum = function(angle) {
	var tmp = parseInt(angle / Math.PI / 2 * countOfNumbers) % countOfNumbers;
	if (tmp < 0)
		tmp += countOfNumbers;
	return tmp + 1;
}
