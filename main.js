function onSuccess(acceleration) {
    /*alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n' +
		  ((Math.atan(acceleration.y / acceleration.x))/Math.PI*180)+90
		);*/

	var element = document.getElementById('textfeld');
    element.innerHTML = "x:"+  acceleration.x + "y:"+  acceleration.y +" <br />"+ "<br />"+ "<br />"+getAngle(acceleration.x, acceleration.y);
	drawDial(-getAngle(acceleration.x, acceleration.y)* Math.PI/180) ;
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