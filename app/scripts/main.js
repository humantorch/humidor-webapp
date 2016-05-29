$.ajax({
	dataType:'json',
	url:'http://humidor.sparklegravy.com/jsonp.php',
	dataType: 'jsonp',
	success: function(data) {
		
	}
});

function things(data) {
	console.log(data);
	var len = data.length-1,
	d = data[len],
	$curdate = $('#curdate'),
	warning = '#cb4b16';
	$curdate.text(d.curdate);

	if (d.temperature < 65  || d.temperature > 72) {
		$('.knob.temp').show().knob({
			fgColor: warning
		});
	} else {
		$('.knob.temp').show().knob();
	}

	if (d.humidity < 65  || d.humidity > 72) {
		$('.knob.humi').show().knob({
			fgColor: warning
		});
	} else {
		$('.knob.humi').show().knob();
	}

	$({value: 0}).animate({value: d.humidity}, {
	    duration: 1500,
	    easing:'easeOutQuad',
	    step: function() 
	    {
	        $('.knob.humi').val(Math.ceil(this.value)).trigger('change').val($('.humi').val()+'%');
	    }
	});

	$({value: 0}).animate({value: d.temperature}, {
	    duration: 1500,
	    easing:'easeOutQuad',
	    step: function() 
	    {
	        $('.knob.temp').val(Math.ceil(this.value)).trigger('change').val($('.temp').val()+'ºF');
	    }
	});
	
};