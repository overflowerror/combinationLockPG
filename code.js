var code = new Array();

var fuzzyRadius = 5;

var checkCode = function(num, value) {
	return (Math.abs(code[num] - value) < fuzzyRadius);
}
