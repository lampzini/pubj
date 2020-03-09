$(function(){

	// 텝게시판 스크립트
	var tabMenu = $('ul.tab_board > li > a');
	var tabList = $('ul.tab_board >li > div.tab_list');

	$(tabMenu).on('click focus',function(){
		$(tabMenu).removeClass('active');
		$(tabList).removeClass('active');

		$(this).addClass('active');
		$(this).parent().find('div.tab_list').addClass('active');

		return false;
	
	});



	// 팝업뉴스(#cont3) 슬라이드 스크립트
	var interval;

	function slideTimer(){																					// slideTimer() 함수 선언
		interval = setInterval(function(){cardSlide()},3000);				// 3초 간격으로 slideTimer() 함수를 실행
	}

	var slideLoc = $('#popnews > ul');
	var slideNum = $('#popnews > ul > li').length-1;							// 카드뉴스 개수
	var slideCardWidth = $('#popnews > ul > li').width();					// 카드뉴스 가로폭

	function cardSlide(){
		$(slideLoc).animate({'left':'-=' + slideCardWidth + 'px'},500,function(){
			$(this).css({left:'-'+slideCardWidth+'px'});
			$(slideLoc).append($(slideLoc).children('li').eq(0));
		});
	
	}

	// prev 버튼
	function slideprev(){
		$(document).on('click','.btn_prev_card a',function(){										// Document 안의 .btn_prev_card 요소에 대해 click 이벤트
			$(slideLoc).animate({'left':'+=' + slideCardWidth + 'px'},500,function(){
				$(this).css({left:'-'+slideCardWidth+'px'});
				$(slideLoc).prepend($(slideLoc).children('li').eq(slideNum));
			});

			return false;

		});
	}
	slideprev();

	// next 버튼
	function slidenext(){
		$(document).on('click','.btn_next_card a',function(){										// Document 안의 .btn_prev_card 요소에 대해 click 이벤트
			$(slideLoc).animate({'left':'-=' + slideCardWidth + 'px'},500,function(){
				$(this).css({left:'-'+slideCardWidth+'px'});
				$(slideLoc).append($(slideLoc).children('li').eq(0));
			});

			return false;

		});
	}
	slidenext();


	slideTimer();							// 함수 호출

});


// 미디어(#cont5) 슬라이드 스크립트
$(function(){

	var interval2;

	function slideTimer2(){																		// slideTimer() 함수 선언
		interval2 = setInterval(function(){cardSlide2()},3000);					// 3초 간격으로 slideTimer() 함수를 실행
	}

	slideTimer2();							// 함수 호출

	var slideLoc2 = $('#mediabox > ul');
	var slideNum2 = $('#mediabox > ul > li').length-1;							// 카드뉴스 개수
	var slideCardWidth2 = $('#mediabox > ul > li').width();						// 카드뉴스 가로폭

	function cardSlide2(){
		$(slideLoc2).animate({'left':'-=' + slideCardWidth2 + 'px'},500,function(){
			$(this).css({left:'-'+slideCardWidth2+'px'});
			$(slideLoc2).append($(slideLoc2).children('li').eq(0));
		});
	}

	// prev 버튼
	function slideprev2(){
		$('.btn_prev_media a').on('click',function(){
			$(slideLoc2).animate({'left':'+=' + slideCardWidth2 + 'px'},500,function(){
				$(this).css({left:'-'+slideCardWidth2+'px'});
				$(slideLoc2).prepend($(slideLoc2).children('li').eq(slideNum2));
			});

			return false;

		});
	}
	slideprev2();	 

	// next 버튼
	function slidenext2(){
		$('.btn_next_media a').on('click',function(){

			$(slideLoc2).animate({'left':'-=' + slideCardWidth2 + 'px'},500,function(){
				$(this).css({left:'-'+slideCardWidth2+'px'});
				$(slideLoc2).append($(slideLoc2).children('li').eq(0));
			});

			return false;

		});
	}
	slidenext2();

});


// 링크페이지 이동
function selectURL(fm) {
	var golink = fm;
	var url = golink.addr.options[golink.addr.selectedIndex].value;

	if(url == ""){
		return false;
	}else{
		window.open(url,'','');
	}
}