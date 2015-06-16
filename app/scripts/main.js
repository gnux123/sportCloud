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


	$('.photolibCover').slick({
		dots: true,
		customPaging: function(slider, i) { 
			return '<button class="img-tab"><img src="images/thumbnails-' + (i+1) + '.jpg"></button>';
		}
	});

	//slideNewsMain
	var slider = $(".slideNewsMain"),
		_length = slider.find("div").length;

	$(".slideNavs").append("<ul></ul>");

	var _navs = $(".slideNavs > ul");

	for(i=0; i<_length; i++) {
		var subText = slider.find("div").eq(i).find("a img").attr("alt");
		slider.find("div").eq(i).find("a").before(i+1);
		// console.log(subText);
		_navs.append("<li class='test"+i+"'><a href='#'>"+subText+"</a></li>");
	} 

	slider.slick({
		dots: false,
        speed: 180,
        fade: true,
        cssEase: 'linear'
	});

	$(".slideNavs > ul li").hover(function(){
		var slideIndex = $(this).index();
		slider.slick('slickGoTo', slideIndex, false);
		
	});

});


