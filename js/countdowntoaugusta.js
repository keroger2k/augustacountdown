var Countdown = Countdown || {};

Countdown.StartTime = moment('2014-04-10 07:30 -0500'); //EST
//Countdown.StartTime = moment('2013-09-13 07:30 -0500'); //EST

$(function() {
	
	var $months = $('.months'), 
		$weeks = $('.weeks'), 
		$days = $('.days'), 
		$hours = $('.hours'), 
		$minutes = $('.minutes'), 
		$seconds = $('.seconds');


	Countdown.startTimer = function() {
		var localTime = moment().local(),  //Local    
	    	c = moment.duration(Countdown.StartTime.diff(localTime));
	    
	    $months.text(c.months());
	    $weeks.text(c.weeks());
	    $hours.text(c.hours());
	    $days.text(c.days() % 7);
	    $minutes.text(c.minutes());
	    $seconds.text(c.seconds());
	};	

	Countdown.startTimer();
	
	setInterval(Countdown.startTimer, 1000);

});

