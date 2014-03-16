var onSuccess = function(heading) {
    var element = document.getElementById('heading');
    element.innerHTML = 'Heading: ' + heading;
};

var onErrors = function() {
    alert('onError!');
};

var startup = function(){
	var watchID = navigator.compass.getCurrentHeading(onSuccess, onErrors);
	lockinit();
}
window.onload = startup;
