function onSuccess(acceleration) {
	var element = document.getElementById('textfeld');
	element.innerHTML = "x:"+  acceleration.x + "y:"+  acceleration.y +" <br />"+ "<br />"+ "<br />"+getAngle(acceleration.x, acceleration.y);
	handleAngle(getAngle(acceleration.x, acceleration.y) / 180 * Math.PI);
};
function getAngle (x, y) {
 		if (x == 0)
			x += 0.00001;
		x = -x;
		if (x < 0) 
			return (360 - Math.atan(y / x) * 360 / 2 / Math.PI - 90);
		else 
			return -(Math.atan(y / x) * 360 / 2 / Math.PI - 90);
}

function onError() {
    alert('onError!');
};

var startup = function(){
 	watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError,options);
	lockinit();
}


var options = { frequency: 100 };

document.addEventListener("deviceready", startup, false);

//window.onload = startup;