var onSuccess = function(heading) {
    var element = document.getElementById('heading');
    element.innerHTML = 'Heading: ' + heading.magneticHeading;
    drawDial(heading.magneticHeading*Math.PI/180);
};

var onErrors = function() {
    alert('Compass error: ' + compassError.code);
};

var startup = function(){
 	watchID = navigator.compass.watchHeading(onSuccess, onErrors, options);
	lockinit();
}

var watchID = null;
var options = { frequency: 1000 };

document.addEventListener("deviceready", startup, false);