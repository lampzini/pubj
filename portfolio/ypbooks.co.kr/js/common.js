$(function(){
	$('#header').append('<p class="menuBtn">menu</p>');
	$('.menuBtn').css({
						'display' 	: 'block',
						'position'	: 'fixed',
						'right'		: '10px',
						'top'		: '7px',
						'width'		: '32px',
						'height'	: '32px',
						'background': 'url(img/btn_nav.png) no-repeat',
						'background-size'	: '100% 100%',
						'text-indent'		: '-9999em',
						'cursor'	: 'pointer'
	});
	$('.nav').css({
				'margin-top':'-500px',
				'opacity':'0'
			},500,'linear').removeClass('on');

	$('.menuBtn').click(function(){
		if($('.nav').hasClass('on')){
			$('.nav').animate({'margin-top':'-500px',
				'opacity':'0'}
			,500,'linear').removeClass('on');
		}else{
			$('.nav').animate({'margin-top':'0','opacity':'1'
			},500,'linear').addClass('on');
		}
	});

});

//--------------Sub-page 2---------------
//약관동의 체크
function check(){
	var frm = document.frm;
	if(!frm.agree1.checked){
		alert("약관에 동의하세요!");
		frm.agree1.focus();
		return;
	}
	if(!frm.agree2.checked){
		alert("개인정보에 동의하세요!");
		frm.agree2.focus();
		return;
	}
	location.href = "join2.html";	
}

function allCheck(){
	with(document.frm){
		if(all.checked){
			for(var i=0;i<length;i++){
				if(elements[i].type == "checkbox"){
					elements[i].checked = true;
				}
			}
		}else{
			for(var i=0;i<length;i++){
				if(elements[i].type == "checkbox"){
					elements[i].checked = false;
				}
			}
		}
	}
}

//--------------Sub-page 3---------------
//아이디 중복체크
$("#idCheck").click(function(){
	//서버 id비교검색처리후 아이디 사용여부 판단(서버진행)
	alert("해당 아이디를 사용하실수 있습니다.");
});


function formCheck(){
	var join = document.join;
	var reg_email = /([0-9a-zA-Z_]+)@([0-9a-zA-Z_-]+)\.([0-9a-zA-Z_]+)/;
	var reg_num = /(?=.*[a-z])(?=.*[0-9])(?=.*[?~!@#$%^&*_-])/;
	
	//아이디검사
	if(!join.id.value){
		alert("아이디를 입력하세요!");
		join.id.focus();
		return false;
	}
	if(!reg_email.test(join.id.value)){
		alert("이메일 형식에 맞게 입력하세요!");
		join.id.focus();
		return false;
	}


	
	//비밀번호 검사
	if(!join.pw.value){
		alert("비밀번호를 입력하세요!");
		join.pw.focus();
		return false;
	}
	if(join.pw.value.length<8){
		alert("비밀번호를 8자 이상 입력하세요!");
		join.pw.focus();
		return false;
	}
	if(!reg_num.test(join.pw.value)){
		alert("비밀번호는 영문, 숫자, 특수문자를 포함하는 형식이어야 합니다!");
		join.pw.focus();
		return false;
	}
	
	//비밀번호 재입력 검사
	if(!join.repw.value){
		alert("비밀번호를 확인하세요!");
		join.repw.focus();
		return false;
	}
	if(join.pw.value!=join.repw.value){
		alert("비밀번호가 맞지 않습니다!");
		join.repw.focus();
		return false;
	}
	
	//회원명 검사
	if(!join.memberName.value){
		alert("회원명을 입력하세요!");
		join.memberName.focus();
		return false;
	}

	//회사명 검사
	if(!join.address.value){
		alert("정확한 주소를 입력하세요!");
		join.address.focus();
		return false;
	}

	//전화번호 검사
	if(!join.tel.value){
		alert("전화번호를 입력하세요!");
		join.tel.focus();
		return false;
	}
	//isNaN() 수치인지확인함수 010-1234(x), 0101234(o)
	if(isNaN(join.tel.value)){
		alert("숫자만 입력하세요!");
		join.tel.focus();
		return false;
	}

	//휴대전화번호 검사
	if(!join.hp.value){
		alert("휴대전화번호를 입력하세요!");
		join.hp.focus();
		return false;
	}
	if(isNaN(join.hp.value)){
		alert("숫자만 입력하세요!");
		join.hp.focus();
		return false;
	}

	//직업 검사
	if(!join.job.value){
		alert("직업을 선택하세요!");
		join.job.focus();
		return false;
	}
}

//체크박스 자동
function checking(st){
	var join = document.join;
	
	if(st == "on"){
		for(var i=0;i<join.length;i++){
			if(join.elements[i].type == "checkbox"){
				join.elements[i].checked = true;
				join.elements[i].disabled = false;

			}
		}
	}else{
		for(var i=0;i<join.length;i++){
			if(join.elements[i].type == "checkbox"){
				join.elements[i].checked = false;
				join.elements[i].disabled = true;
			}
		}
	}
}
//login 배경안보이기

var idimg = $("#container2 .loginPage .inputText p:first-child input");
var pwimg = $("#container2 .loginPage .inputText p:last-child input");

idimg.click(function(){
  $(this).css("background","none");
});

pwimg.click(function(){
  $(this).css("background","none");
});

//아이디암호입력 체크스립트
function idpwCheck(){
 
 var idVal = document.getElementById('id');
 var pwVal = document.getElementById('pw'); 
 
 if(!idVal.value){
       alert("아이디를 입력하세요!");
  idVal.focus();
  return false;
 }
 if(!pwVal.value){
       alert("비밀번호를 입력하세요!");
  pwVal.focus();
  return false;
 }

 
  
   frm.submit();// action으로 이동
}



//Q&A 아코디언 메뉴
//dt클릭
$("#container6 .qnaContents dt").click(function(){
	//alert("oi");
	$(this).next().toggleClass("on"); //혼자 열었다 닫았다
	$(this).next().siblings("dd").removeClass("on");//removeClass==동작 취소
});

//dd클릭
$("#container6 .qnaContents dd li").click(function(){
	//alert("dd");
	$(this).find("ul.answer").toggleClass("on");
	$(this).siblings().find("ul.answer").removeClass("on");
});

	
