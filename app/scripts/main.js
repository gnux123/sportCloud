$(function(){

	$(".cates > li a").hover(function(){
		var _index = $(this).parent("li").index();

		$(this).parent("li")
			   .addClass("active")
			   .siblings("li.active")
			   .removeClass("active");

		if(_index == 6 || _index == 8) {
			$(".subNavs").hide();
		}else{
			$(".subNavs").show();
			$(".subNavs ul").eq(_index).show().siblings("ul").hide();
		}

	});


	//scores content tabs effect
	var _ul = $(".scoreNav > ul > li");

	_ul.eq(0).addClass("active");

	_ul.click(function(){
		var _index = $(this).index();
		$(this).addClass("active").siblings(".active").removeClass("active");

		$(".scoresCotent > div").hide();
		$(".scoresCotent > div").eq(_index).show();
	});
});