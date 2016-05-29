function things(data) {
	var len = data.length-1;
	console.log(data[len]);
};

$(function() {
	$.ajax({
		dataType:'jsonp',
		url:'http://humidor.sparklegravy.com/jsonp.php',
		callback: 'things'
	});
});