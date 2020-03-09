$(function(){
	
	var gSpace = 1;

	var col_w1 = (100-2*gSpace)/12;
	var col_w2 = 2/12*(100-gSpace)-gSpace;
	var col_w3 = 3/12*(100-gSpace)-gSpace;
	var col_w4 = 4/12*(100-gSpace)-gSpace;
	var col_w5 = 5/12*(100-gSpace)-gSpace;
	var col_w6 = 6/12*(100-gSpace)-gSpace;
	var col_w7 = 7/12*(100-gSpace)-gSpace;
	var col_w8 = 8/12*(100-gSpace)-gSpace;
	var col_w9 = 9/12*(100-gSpace)-gSpace;
	var col_w10 = 10/12*(100-gSpace)-gSpace;
	var col_w11 = 11/12*(100-gSpace)-gSpace;
	var col_w12 = 100;
	alert(col_w1);
	alert(col_w2);
	alert(col_w3);
	alert(col_w4);
	alert(col_w5);
	alert(col_w6);
	alert(col_w7);
	alert(col_w8);
	alert(col_w9);

	$('div.col-1').css({'width':col_w1 +'%'});
	$('div').hasClass('col-2').css({'width':col_w2 +'%'});
	$('div').hasClass('col-3').css({'width':col_w3 +'%'});
	$('div').hasClass('col-4').css({'width':col_w4 +'%'});
	$('div').hasClass('col-5').css({'width':col_w5 +'%'});
	$('div').hasClass('col-6').css({'width':col_w6 +'%'});
	$('div').hasClass('col-7').css({'width':col_w7 +'%'});
	$('div').hasClass('col-8').css({'width':col_w8 +'%'});
	$('div').hasClass('col-9').css({'width':col_w9 +'%'});
	$('div').hasClass('col-10').css({'width':col_w10 +'%'});
	$('div').hasClass('col-11').css({'width':col_w11 +'%'});
	$('div.col-12').css({'width':col_w12 +'%'});

});