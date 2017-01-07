// Fade Out Arrow Upon Scrolling Down
var windowHeight = $(window).height()/3;
var scrollPosition;
var percentScrolled;

$(window).on("scroll", function(){
	scrollPosition = $(window).scrollTop();
	percentScrolled = scrollPosition/windowHeight;

	if(percentScrolled <= 1){
		 $("#arrow").fadeTo(0, 1-percentScrolled);
	}
	else{
		$("#arrow").fadeOut(100);
	}
});

