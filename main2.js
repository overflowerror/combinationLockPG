var onSuccess = function(heading) {
    var element = document.getElementById('heading');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
    drawDial(parseInt(heading.magneticHeading)*Math.PI/180);
};

var onErrors = function() {
    alert('Compass error: ' + compassError.code);
};

var startup = function(){
 	watchID = navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
	lockinit();
}

var watchID = null;
var options = { frequency: 1000 };

//window.onload = lockinit;
document.addEventListener("deviceready", startup, false);