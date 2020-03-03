(function(){

$(document).ready(function  (){

/*	$(document).ready(function(){
      $('.header__carousel--container').bxSlider({
      	auto: true,
      	pause: 4000,
      });
    });*/

	let button = $(".button");

	button.on("click", function(e) {	
	//do buttona
		if (button.hasClass("button-active") && ("button-after") && ("button-before") ) {
			button.removeClass("button-active button-after button-before");
		} else {
			button.addClass("button-active button-after button-before");
		}

	//do nawigacji
			$("nav").toggleClass("nav__active");
			
	});

	$( window ).resize(function() {
		if (window.innerWidth > 768) {
		//do nawigacji
			$("nav").removeClass("nav__active"),
		//do buttona
			$(".button").removeClass("button-active"),
			$(".button").removeClass("button-after");
		}	 	
	});


	// nawigacja mobile
	let window_scrollTop;

	$( window ).scroll(function() {
			    window_scrollTop = $(window).scrollTop();
			let header_scroll =  $(".header"),
			    header_scroll_height = header_scroll.innerHeight(),
				button_container = $(".button__container"),
				button_container_height = button_container.innerHeight();
	
		if ( header_scroll_height - (button_container_height + 70)   < window_scrollTop) {
			button_container.addClass("container__nav--active");		
		}else{
			button_container.removeClass("container__nav--active");
		}		
	});

		$("nav a").click(function(){
			$("nav a").removeClass("nav__menu--active");
			$(this).addClass("nav__menu--active");
		});

		//filter portfolio
		$(".category_item").click(function () {
			 $(".category_item").removeClass("hov");
			 $(this).addClass("hov");

			let category = $(this).attr("id");
			console.log(category);
			   
			if(category == "all"){
				$(".all").addClass("hiden");
				setTimeout(function(){
					$(".all").removeClass("hiden");
				}, 300);
			} else {
				$(".all").addClass("hiden");
				setTimeout(function(){
					$("." + category).removeClass("hiden");
				}, 300);
			}
		});



	});

})();