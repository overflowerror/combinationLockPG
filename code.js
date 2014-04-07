const right = 0;
const left = 1;
const non = 2;

const hyst = 0;
const toll = 2;

var code = [3, 14, 25, 9, 26];
var input = new Array();

var oldNum = 0;
var oldDir = non;
var index = 0;
var numberOfRounds = 0;

var handleAngle = function(angle) {
	var dir;
	
	var num = angleToNum(angle);
	
	console.log(num);
	
	if (oldNum - num > countOfNumbers * 2 / 3)
		dir = left;
	else if (num - oldNum > countOfNumbers * 2 / 3)
		dir = right;
	else if (oldNum - num > hyst)
		dir = right;
	else if (num - oldNum > hyst)
		dir = left;
	else 
		dir = oldDir;
	
	if (oldDir != non) {
		if (dir != oldDir) {
			input[index++] = oldNum;
		} else {
			if (oldNum > 2 / 3 * countOfNumbers && num < 1 / 3 * countOfNumbers && dir == right)
				numberOfRounds++;
			if (numberOfRounds > 2) {
				index = 0;
				input = new Array();
			}
		}
	}
	
	oldDir = dir;
	oldNum = num;
		
	drawDial(- angle);
}

var check = function() {
	if (code.length != input.length)
	{
 		
		alert("Tjo "+ input.join(" "));
		input = new Array();
		return false;
	}
	for (var i = 0; i < code.length; i++) {
		if (Math.abs(code[i] < input[i]) < toll) {
 			
			alert("Tjo2 "+ input.join(" "));
			input = new Array();
			return false;
		}
	}
	window.location.href = "http://www.youtube.com/watch?v=aObeQUNELm4";
}