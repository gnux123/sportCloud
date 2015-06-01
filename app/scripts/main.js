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
});