$(function(){

	//header gameLists
	$(".gamesShowWrap").slick({
		dots: false,
		lazyLoad: 'ondemand',
  	slidesToShow: 6,
  	slidesToScroll: 1
	});

	$(".cates > li a").hover(function(){
		var _index = $(this).parent("li").index();

		$(this).parent("li")
			   .addClass("active")
			   .siblings("li.active")
			   .removeClass("active");

		if(_index === 6 || _index === 8) {
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
		//slider.find("div").eq(i).find("a").before(i+1);
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


	//filter slides
	var videoSlider = $(".videoShowRoom");

	videoSlider.slick({
		dots: true,
		arrows: false,
		speed: 180,
        fade: true,
        cssEase: 'linear',
        customPaging: function(slides, i) {
        	var targetShow = videoSlider.find(".slick-slide").eq(i);
        	var text = targetShow.find("h3").text();
        	var getURL = targetShow.find("iframe").attr("src"),
        		videoCode = getURL.split("/").pop();

			return '<button class="video-tab">\
			<img src="http://i.ytimg.com/vi/'+ videoCode + '/0.jpg" width="100%"><p>' + text + '</p></button>';
		}

	});


	$("#videoSelect").change(function(){
		var _val = $('#videoSelect :selected').val();

		if (_val === 'all') {
			videoSlider.slick('slickUnfilter');
		} else if (_val === 'hot') {
			videoSlider.slick('slickFilter','.hot');
		} else if (_val === 'live') {
			videoSlider.slick('slickFilter','.live');
		}
	});


	//focusPesrson select
	$(".fpNavs li").click(function(){
		var fpIndex = $(this).index();
		$(this).addClass("active").siblings(".active").removeClass("active");
		$(".fpZones").eq(fpIndex).show().siblings(".fpZones").hide();
	});

	$(".fpZones > ul > li a").hover(function(){
		var _parent = $(this).parent("li");
		_parent.addClass("current").siblings("li.current").removeClass("current");
	});


});
