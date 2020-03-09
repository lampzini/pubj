$(function(){

	// 스크롤 다운/업 시 mGnb, naviBar 보이기,숨기기
	var lastScrollTop = 0;
	var numT = 5;		// 이동 여부 비교값                                                      스크롤시 뒷면 공박스 높이 변경 처리 할것!!

	$(window).scroll(function(event){
		var st = $(this).scrollTop();

		if(Math.abs(lastScrollTop - st) <= numT) return;
	
		if(st > lastScrollTop && lastScrollTop > 0){		// 스크롤 다운
			$('#Header').addClass('on');

		}else{												// 스크롤 업
			$('#Header').removeClass('on');

		}
		lastScrollTop = st;
	});

});