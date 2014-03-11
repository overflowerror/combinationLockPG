var onSucess = function(heading) {
    var element = document.getElementById('heading');
    element.innerHTML = 'Heading: ' + heading;
};

var onErrors = function() {
    alert('onError!');
};

var startup = function(){
	var watchID = navigator.compass.watchHeading(onSuccess, onErrors);
	lockinit();
}
window.onload = startup;
