

function things(data) {
	var len = data.length-1,
		d = data[len],
		$humi = $('#humi'),
		$temp = $('#temp'),
		$curdate = $('#curdate');
	
	console.log(d);
	$humi.text(d.humidity);
	$temp.text(d.temperature);
	$curdate.text(d.curdate);
};

$(function() {
	$.ajax({
		dataType:'jsonp',
		url:'http://humidor.sparklegravy.com/jsonp.php',
		callback: 'things'
	});
});