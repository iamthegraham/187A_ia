$(document).ready(function(){
	
	//Fix Errors - http://www.learningjquery.com/2009/01/quick-tip-prevent-animation-queue-buildup/
	
	//Remove outline from links
	$("a").click(function(){
		$(this).blur();
	});
	
	//When mouse rolls over
	$("li").mouseover(function(){
		
		$(this).stop().animate({height:'170px'},{queue:false, duration:500, easing: 'easeOutQuart'})
	});
	
	//When mouse is removed
	$("li").mouseout(function(){
		$(this).stop().animate({height:'33px'},{queue:false, duration:500, easing: 'easeOutQuart'})
	});
	
});