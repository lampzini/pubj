$(function(){

	// 스크롤 다운/업 시 mGnb, naviBar 보이기,숨기기
	var lastScrollTop = 0;
	var numT = 5;		// 이동 여부 비교값                                                      스크롤시 뒷면 공박스 높이 변경 처리 할것!!

	$(window).scroll(function(event){
		var st = $(this).scrollTop();

		if(Math.abs(lastScrollTop - st) <= numT) return;
	
		if(st > lastScrollTop && lastScrollTop > 0){		// 스크롤 다운
			$('#mHeader').css('top','-100px');
			$('#naviBar').css('bottom','-100px');

		}else{												// 스크롤 업
			$('#mHeader').css('top','0');
			$('#naviBar').css('bottom','-1px');

		}
		lastScrollTop = st;
	});

	// side Gnb
	$(".openSide, .openSide2").click(function(){
		$("#sideMenuWrap,.bkCover,html").addClass("open");
		
		window.location.hash = "#open";
	});

	window.onhashchange = function(){
		if(location.hash != "#open"){
			$("#sideMenuWrap,.bkCover,html").removeClass("open");
		}
	}

	// 메인페이지 상품 더보기 / 닫기 
	var newBook2 = $('.newBook2');
	var bestBook2 = $('.bestBook2');
	var steadyBook2 = $('.steadyBook2');
	var sw1 = false;
	var sw2 = false;
	var sw3 = false;

	$('.moreNew').click(function(){
		if(!sw1){
			newBook2.show('fast');
			$(this).text('닫기').addClass('off');
			sw1 = true;
		}else{
			newBook2.hide('fast');
			$(this).text('더보기').removeClass('off');

			var offset = $('.newBook:eq(0)').offset();
			$('html').animate({scrollTop : (offset.top -200)}, 400);

			sw1 = false;
		}
	});

	$('.moreBest').click(function(){
		if(!sw2){
			bestBook2.show('fast');
			$(this).text('닫기').addClass('off');
			sw2 = true;
		}else{
			bestBook2.hide('fast');
			$(this).text('더보기').removeClass('off');

			var offset = $('.bestBook:eq(0)').offset();
			$('html').animate({scrollTop : (offset.top -200)}, 400);
			
			sw2 = false;
		}
	});

	$('.moreSteady').click(function(){
		if(!sw3){
			steadyBook2.show('fast');
			$(this).text('닫기').addClass('off');
			sw3 = true;
		}else{
			steadyBook2.hide('fast');
			$(this).text('더보기').removeClass('off');

			var offset = $('.steadyBook:eq(0)').offset();
			$('html').animate({scrollTop : (offset.top -200)}, 400);
			sw3 = false;
		}
	});

	// 하단 돋보기 버튼 클릭시 검색창 포커싱
	var sForm = document.srchBox

	$('.schBtn').click(function(){
		sForm.srch.focus();
	
	});



});