$(function(){

	//모바일 메뉴
	$('.mobile_btn').click(function(){
		$('#m_gnb').slideToggle();
	});

	$('#m_gnb .m_main').click(function(){
		$(this).children('.m_sub').stop().slideDown();
		$(this).children('a').css({background:'#ea6069',color:'#fff'});
		$(this).siblings().children('a').css({background:'#fff',color:'#555'});
		$(this).siblings().children('.m_sub').stop().slideUp();	
	});


	// 데스크탑 메뉴
	var gnbA = $('#gnb .main > a');

	gnbA.on('mouseenter focus',function(){
		$('#gnb .sub').hide();
		$(this).next().slideDown(400);
	});

	$('#gnb .main').mouseleave(function(){
		$('#gnb>ul>li>ul').hide();
	});

	// 모바일 이상에서 모바일메뉴 숨기기
	$(window).resize(function(){
		if($(window).width() > 481){
			$('#m_gnb').hide();
		}
	
	});

});