jQuery.fx.interval = 1;
$(function() {
	$.ajax({
	dataType:'json',
	url:'http://humidor.sparklegravy.com/json.php',
	dataType: 'json',
	success: function(data) {

		var len = data.length-1,
			d = data[len],
			$curdate = $('#curdate'),
			warning = '#cb4b16',
			easetype = 'easeOutCubic',
			easespeed = 1500;


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
		    duration: easespeed,
		    easing: easetype,
		    step: function() {
		        $('.knob.humi').val(this.value).trigger('change').val(parseFloat($('.humi').val()).toFixed(1)+'%');
		    }
		});

		$({value: 0}).animate({value: d.temperature}, {
		    duration: easespeed -250,
		    easing: easetype,
		    step: function() {
		        $('.knob.temp').val(this.value).trigger('change').val(parseFloat($('.temp').val()).toFixed(1)+'&deg;');
		    }
		});
	}
});
});
