function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
};

function onError() {
    alert('onError!');
};

var startup = function(){
 	watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError);
	lockinit();
}


var options = { frequency: 1000 };

document.addEventListener("deviceready", startup, false);