$(function(){

	// sub_menu (side) 아코디언메뉴 스크립트
	var sideMenu = $('ul.sub_menu > li > a');

	$(sideMenu).on('mouseenter focusin',function(){

			$(this).next().slideDown(400).parent().siblings().find('a').next().slideUp();

			//return false;			// 지우는 대신 서브메뉴가 있는 a 태그의 링크는 href="#none" 처리한다.
	});

	// sub_board 게시판 텝메뉴
	var brdTab = $('.subpage > ul.tab_title > li > a');

	$(brdTab).on('click',function(){
		var tab_num = $(this).attr('data-tab');

		$(brdTab).removeClass('active');
		$('.board_tab').removeClass('current');

		$(this).addClass('active');
		$(this).parent().css('border','0').siblings().css('border','1px solid #efefef');
		$('#'+tab_num).addClass('current');
	
		return false;
	});

	// QnA 아코디언 스크립트
	var qnaMenu = $('dl dt > a');

	$(qnaMenu).on('mouseenter focusin',function(){
	
		$(this).parent().next().slideDown(400).parent().siblings().find('dd').slideUp();

		return false;
	});
});
