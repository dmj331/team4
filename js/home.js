$(document).ready(function(){

	$(".home_menu li").click(function(){

		$(this).children("ul").stop().slideToggle(300);

	});
	$(".header_menu li").click(function () {

	    $(this).children("ul").stop().slideToggle(300);

	});

	$(".ques button").on("click", function(){

		if($(".ques_info").length === 0){
			$(".ques").append("<div class='ques_info'>Click on the torch to get back home<br>Click on the title to see the menu</div>");
		}
		
		$(".ques_info").toggle(100);

	});

	$(document).click(function(e){
    	var elem = $(e.target).attr('id'); //this should give you the clicked element's id attribute
    	if(elem !== 'menu-1'){
        	$('.list-1').slideUp(200); //or however you want to hide it
    	}
    	if(elem !== 'menu-2'){
        	$('.list-2').slideUp(200); //or however you want to hide it
    	}
    	if(elem !== 'menu-3'){
        	$('.list-3').slideUp(200); //or however you want to hide it
    	}
	});

    /*$(window).bind('DOMMouseScroll', function(e){
    	if(e.originalEvent.detail > 0) {
        	//scroll down
        	$(".nav_bar").fadeOut();
     	}
     	else{
        	//scroll up
         	$(".nav_bar").fadeIn();
     	}
 	});

 	$(window).bind('mousewheel', function(e){
    	if(e.originalEvent.wheelDelta < 0) {
        	//scroll down
        	$(".nav_bar").fadeOut();
     	}
     	else {
        	//scroll up
        	$(".nav_bar").fadeIn();
    	}
 	});*/

	$(window).on("scroll", function(){

		$offset = $(window).scrollTop() - 1;
		$curr = $(window).scrollTop();

		if($curr == $offset)
		{
			$(".nav_bar").fadeOut();
		}

	});


 	$("dt").each(function(i, v){
 		$(this).addClass("dt-btn");
 	});

 	$("#glossaryNav ul li").each(function(){

 		// $(this).addClass("button");

 	});

 	$("dt").on("click", function(){
 		$(this).next().stop().slideToggle(200);
 	});

});