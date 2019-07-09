$(document).ready(function(){

	//fullpage plugin initialization
	$('#fullpage').fullpage({	
	    anchors:['firstPage', 'secondPage', 'thirdPage', '4thPage' , '5thPage'],
	    menu: '#js-menu',
	    autoScrolling: false,
	    fitToSection: false,
	    scrollingSpeed: 1200
	});
	// wow plugin initialize
	if(screen.width > 768){
		new WOW().init();
	}
	// rellax initialization
	if(screen.width > 768){
		var rellax = new Rellax('.rellax',{
			center: true
		});
	}
})