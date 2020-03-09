$(function(){

	// gnb 스크립트
	$('#gnb > li').on('mouseenter focusin',function() {
		$('#gnb > li').removeClass('on');
		$(this).addClass('on');
		$(this).find('div').stop().slideDown('fast');
	});

	$('#gnb > li').on('mouseleave focusout',function() {
		$('#gnb > li').removeClass('on');
		$(this).find('div').stop().slideUp(100);
	});

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