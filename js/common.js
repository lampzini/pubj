$(function(){

	// AOS init
	AOS.init({
		once: true,
	});

	// GNB fixed for scroll
	var lastScrollTop = 0;
	var numT = 1;
	var cont = $('#container > section');

	$(window).on('scroll',function(event){
		var scrollPos = $(this).scrollTop();

		if(Math.abs(lastScrollTop - scrollPos) <= numT) return;

		if(scrollPos > 600){
			$('#nav_area').css({'position':'fixed','top':'0px','background':'none'});
			$('#nav_area').addClass('nav_shadow');
			$('#nav ul li').css({'height':'50px','line-height':'50px'});
			$('#header').css({'background':'rgba(255,255,255,1)','color':'#000','height':'50px','line-height':'50px'});
		}else{
			$('#nav_area').css({'position':'absolute','top':'600px','background':'#fff'});
			$('#nav_area').removeClass('nav_shadow');
			$('#nav ul li').css({'height':'100px','line-height':'100px'});
			$('#header').css({'background':'none','color':'#fff','height':'100px','line-height':'100px'});
		}
		lastScrollTop = scrollPos;
	});

	// Page Scrolling / Click menu
	var nav = $('#nav ul li');

	nav.on('click focusin',function(e){
		e.preventDefault();
		var target = $(this);
		var index = target.index();
		var section = cont.eq(index);
		var offset = section.offset().top;

		$('html, body').stop().animate({scrollTop:offset});
	});

	// typed Effect
	var typed = $(".typed");
	typed.typed({
		strings: ["Web publisher.","Web designer."],
		startDelay: 500,
		typeSpeed: 50,
		backSpeed: 0,
		backDelay: 1000,
		fadeOut: false,
		smartBackspace: true,
		cursorChar: '_',
		loop: true,
	});

	// cont2 progress bar script : waypoint.js
	var cont2 = $('#cont2');

	cont2.waypoint(function(direction){
		if(direction == 'down'){
			new WOW().init();
			$('.progress').children().first().animate({'width': '95%'}, 1500).next().animate({'width': '90%'}, 1500).next().animate({'width': '70%'}, 1500).next().animate({'width': '75%'}, 1500).next().animate({'width': '80%'}, 1500).next().animate({'width': '70%'}, 1500);
		}else{
			$('.progress').children().animate({'width': 0}, 1500);
		}
	},{offset: '100%'});

	// cont3 creative : isotope.js
	var crIsotope = $('.cr_container');

	crIsotope.isotope({
		itemSelector: '.cr_box',
		layoutMode: 'fitRows'
	});

	$('#cr_filters li a').on('click focus', function() {
		crIsotope.isotope({ filter: $(this).data('filter') });
		return false;
	});

	// cont3 creative : modal window
	$('.open_pop').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll',
		gallery: {enabled: true}
	});
	
});

// cont2 fade El script
	var nowEl, nextEl;

	function fadeBnr(){
		var nowEl = $('.fade_banner li:eq(0)');
		var nextEl = $('.fade_banner li:eq(1)');

		nowEl.removeClass('active').css({opacity:'0'});
		nextEl.addClass('active').css({opacity:'0'}).animate({'opacity':'1'},1000,function(){
			$('.fade_banner').append(nowEl);
		});
	
	}

	var timer = setInterval("fadeBnr()",4000);