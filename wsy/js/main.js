$(function(){

		$("img").lazyload({skip_invisible : false});

		if ($('.tab_div').length>0){
			$('.tab_div .nav').find('li').each(function(i){
				var _i = i
				$(this).click(function(){
					$('.tab_div .active').removeClass("active");
					$(this).addClass("active");
					var x = _i +1;
					$('.nav_title').html('0'+x);
					$('.tab_div .right_inner').hide();
					$('.tab_div .right_inner').eq(_i).show();
					$('body').scrollTop($('body').scrollTop()+1);
					$('body').scrollTop($('body').scrollTop()-1);
				});
			});
		}
	

	if(page == 'index') {

		var is_move = 0;
		$('.index_04 .btn').click(function(){
			
			if (is_move != 0) return ;

			is_move = 1;
			var count = $('.index_back_04 .inner_img ul').find('li').length;
			var width = 500;
			var $ul = $('.index_back_04 .inner_img ul').css({'width':count*width});
			var ul_width = $ul.css('width');
			$('body').scrollTop($('body').scrollTop()+1);
			$('body').scrollTop($('body').scrollTop()-1);
			var left = $ul.css('left');
			var left=left.substring(0,left.length-2);
			
				if ($(this).hasClass('btn_left')) {
					if (left >=0) {
						var new_left = -((count-1) * 500);
					} else {
						var new_left = left*1 + 500;	
					}
					
				} else {
					if (left <= - ((count-1) * 500)) {
						var new_left = 0;
					} else {
						var new_left = left*1-500;
					}
				}
			$ul.animate({'left': new_left}, 800,function(){
				is_move = 0;
			});
		});

		$('.index_04').hover(function(){
			$(this).find('.btn').css({'opacity':'0.5'});
		},function(){
			$(this).find('.btn').css({'opacity':'0.3'});
		});

		var mytime
		$('.out_member_img').hover(function(){
			var timeIndex = 0;
			var obj = $(this);
			mytime = setInterval(function(){
				timeIndex++;
				if (timeIndex > 30) {
					obj.find('.mask').animate({'top':'-250px'});
					clearInterval(mytime);
				}
			}, 10);
		},function(){
			clearInterval(mytime);
			$(this).find('.mask').animate({'top':'0px'}, 'fast');
		});
	}
	if (page == 'about'){

	}

	$('.nav_ul').hover(function(){
		console.log('in');
		$('.nav_ul .active').removeClass('active');

	},function(){
		$('.nav_ul [act_flg]').addClass('active');
		console.log('out');
	});

});

