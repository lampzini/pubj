  
  //banner 
  $('.index_banner').each(function(){
  
   //蹂��섏꽑�� "html�붿냼" => "Object" 蹂���
  var $banner = $(this),
      $slides = $banner.find('.banner_slides'),
      $pic = $slides.find('.banner_pic'),
      
      $bt = $banner.find('#index_banner_bt'),
      $indicator = $banner.find('.indicator');
  
  var count = $pic.length,
      sp = 1000,
      easing = 'easeInExpo',
      currentIndex = 0,
      
      interval = 5000,
      timer,
      indicatorHTML = '';
   
   /* 
      count = �щ씪�대뱶 �대�吏��� 珥� 媛�닔
      currentIndex = �꾩옱 �대�吏��� �쒖꽌媛�
      timer; �쇱떆�뺤�/�ъ깮�� �꾪븳 �꾩뿭蹂���
      indicatorHTML = '' �듭빱�쒓렇 臾몄옄�� ����
   */
   
   /*�대�吏�諛곗튂�� �몃뵒耳��댄꽣 �쎌엯*/
   $pic.each(function(i){
    $(this).css({
     left: 100 * i +'%'
    });
    indicatorHTML += '<a href="#">'+'</a>';
   });
   
   //.indicator�덉뿉 �듭빱�쒓렇 �쎌엯
   $indicator.html(indicatorHTML);
   
   /*怨듯넻 �щ씪�대뱶 �ъ깮 �⑥닔 留뚮뱾湲�*/
   function slideShow (i) {
    $slides.animate({
     left: -100 * i + '%'
    },sp ,easing);
     currentIndex = i;
     updateNav();
   }
   
   /*bt 踰꾪듉怨� �몃뵒耳��댄꽣 �낅뜲�댄듃 �⑥닔 留뚮뱾湲�*/
   function updateNav(){
    var $prev = $bt.find('.prev'),
        $next = $bt.find('.next');
    
    //泥� 踰덉㎏, 留덉�留� �대�吏��쇰㈃ 踰꾪듉 �④�
    if(currentIndex == 0) {
     $prev.addClass('on');
    }else{
     $prev.removeClass('on');
    }
    
    if(currentIndex == count-1) {
     $next.addClass('on');
    }else{
     $next.removeClass('on');
    }
    
   
    $indicator.find('a').removeClass('on');
    $indicator.find('a').eq(currentIndex).addClass('on');
    
   }
   
   /*bt 踰꾪듉 �묐룞 �쒗궎湲�*/
   $bt.on('click', 'a', function(event){
    event.preventDefault();
    
    if($(this).hasClass('next')){
     slideShow(currentIndex + 1);
     } else {
      slideShow(currentIndex - 1);
     }
   });
   
   /*indicator �대┃�섎㈃ �대떦 �대�吏� �섑��닿린*/
   $indicator.on('click','a',function(event){
    event.preventDefault();
    var i = $(this).index();
     
    if(!$(this).hasClass('on')){
     slideShow(i);
    }
    
    });
   
   
   /*�먮룞�ъ깮 �⑥닔�� �뺤� �⑥닔 留뚮뱾湲�*/
   function startTimer () {
     timer = setInterval(function(){
     var nextIndex = (currentIndex+1) % count;
      
      slideShow(nextIndex);
     }, interval);
   }
   
   function stopTimer () {
    clearInterval(timer);
   }
   
   /*
   banner�� 留덉슦�ㅺ� �щ씪�ㅻ㈃ stopTimer �⑥닔 �ㅽ뻾 
   banner�� 留덉슦�ㅺ� 踰쀬뼱�섎㈃ startTimer �⑥닔 �ㅽ뻾*/ 
   
   $banner.on({
    mouseenter: stopTimer,
    mouseleave: startTimer
   });
   
   /*�щ씪�대뱶�� �⑥닔 �ㅽ뻾*/
   slideShow(currentIndex);
   startTimer();
  });